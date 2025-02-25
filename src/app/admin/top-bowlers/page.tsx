"use client";

import { useEffect, useState } from "react";
import { Table, Button, Form, Modal } from "react-bootstrap";
import AdminLayout from "@/layouts/AdminLayout";
import Head from "next/head";

interface Bowler {
  _id: string;
  pos: number;
  team: string;
  player_name: string;
  player_image: string;
  wickets: number;
  matches: number;
}

const TopBowlersPage = () => {
  const [bowlers, setBowlers] = useState<Bowler[]>([]);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);
  const [selectedBowler, setSelectedBowler] = useState<Bowler | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);

  useEffect(() => {
    fetchBowlers();
  }, []);

  const fetchBowlers = async () => {
    try {
      const res = await fetch("/api/top-bowlers");
      const data = await res.json();
      setBowlers(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching top bowlers:", error);
    }
  };

  const handleEdit = (bowler: Bowler) => {
    setSelectedBowler(bowler);
    setShow(true);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleSave = async () => {
    if (!selectedBowler) return;
    
    try {
      const { _id, ...updatedData } = selectedBowler;
      console.log(selectedBowler);
      // if (imageFile) {
        const formData = new FormData();
        // formData.append("file", imageFile);
        // const uploadRes = await fetch("/api/upload", {
        //   method: "POST",
        //   body: formData,
        // });
        // const uploadData = await uploadRes.json();
        // if (uploadData.url) {
        //   setSelectedBatter({ ...selectedBatter, player_image: uploadData.url });
        // }
        // const uploadData = await uploadRes.json();
        // updatedData.player_image = uploadData.url;
      // }
      
      const res = await fetch(`/api/top-bowlers/${_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      });

      if (res.ok) {
        alert("Bowler updated successfully");
        setShow(false);
        fetchBowlers();
      } else {
        const errorData = await res.json();
        alert(`Error: ${errorData.error}`);
      }
    } catch (error) {
      console.error("Error updating bowler:", error);
    }
  };

  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <AdminLayout>
        <h1>Top Bowlers</h1>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Position</th>
                <th>Player</th>
                <th>Team</th>
                <th>Wickets</th>
                <th>Matches</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {bowlers.map((bowler) => (
                <tr key={bowler._id}>
                  <td>{bowler.pos}</td>
                  <td>
                    {bowler.name}
                  </td>
                  <td>{bowler.team}</td>
                  <td>{bowler.wickets}</td>
                  <td>{bowler.matches}</td>
                  <td>
                    <Button variant="warning" onClick={() => handleEdit(bowler)}>Edit</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}

        {/* Edit Modal */}
        <Modal show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Bowler</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedBowler && (
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Player Image</Form.Label>
                  <Form.Control type="file" onChange={handleFileChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Position</Form.Label>
                  <Form.Control
                    type="number"
                    value={selectedBowler.pos}
                    onChange={(e) => setSelectedBowler({ ...selectedBowler, pos: Number(e.target.value) })}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Player Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={selectedBowler.name}
                    onChange={(e) => setSelectedBowler({ ...selectedBowler, name: e.target.value })}
                  />
                </Form.Group>
                {/* <Form.Group className="mb-3">
                  <Form.Label>Team</Form.Label>
                  <Form.Control
                    type="text"
                    value={selectedBatter.team}
                    onChange={(e) => setSelectedBatter({ ...selectedBatter, team: e.target.value })}
                  />
                </Form.Group> */}


                <Form.Group className="mb-3">
                <Form.Label>Team</Form.Label>
                <Form.Select
                  value={selectedBowler.team}
                  onChange={(e) => setSelectedBowler({ ...selectedBowler, team: e.target.value })}
                >
                  <option value="England">England</option>
                  <option value="India">India</option>
                  <option value="Australia">Australia</option>
                  <option value="New Zealand">New Zealand</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="South Africa">South Africa</option>
                  <option value="Afghanistan">Afghanistan</option>
                  <option value="Bangladesh">Bangladesh</option>
                </Form.Select>
              </Form.Group>


                <Form.Group className="mb-3">
                  <Form.Label>Wickets</Form.Label>
                  <Form.Control
                    type="number"
                    value={selectedBowler.wickets}
                    onChange={(e) => setSelectedBowler({ ...selectedBowler, wickets: Number(e.target.value) })}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Matches</Form.Label>
                  <Form.Control
                    type="number"
                    value={selectedBowler.matches}
                    onChange={(e) => setSelectedBowler({ ...selectedBowler, matches: Number(e.target.value) })}
                  />
                </Form.Group>
              </Form>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow(false)}>Close</Button>
            <Button variant="primary" onClick={handleSave}>Update Changes</Button>
          </Modal.Footer>
        </Modal>
      </AdminLayout>
    </>
  );
};

export default TopBowlersPage;
