"use client";

import { useEffect, useState } from "react";
import { Table, Button, Form, Modal } from "react-bootstrap";
import AdminLayout from "@/layouts/AdminLayout";
import Head from "next/head";

interface Batter {
  _id: string;
  pos: number;
  team: string;
  player_name: string;
  player_image: string;
  runs: number;
  matches: number;
}

const TopBattersPage = () => {
  const [batters, setBatters] = useState<Batter[]>([]);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);
  const [selectedBatter, setSelectedBatter] = useState<Batter | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);

  useEffect(() => {
    fetchBatters();
  }, []);

  const fetchBatters = async () => {
    try {
      const res = await fetch("/api/top-batters");
      const data = await res.json();
      setBatters(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching top batters:", error);
    }
  };

  const handleEdit = (batter: Batter) => {
    setSelectedBatter(batter);
    setShow(true);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleSave = async () => {
    if (!selectedBatter) return;
    
    try {
      const { _id, ...updatedData } = selectedBatter;
      
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
      
      const res = await fetch(`/api/top-batters/${_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      });

      if (res.ok) {
        alert("Batter updated successfully");
        setShow(false);
        fetchBatters();
      } else {
        const errorData = await res.json();
        alert(`Error: ${errorData.error}`);
      }
    } catch (error) {
      console.error("Error updating batter:", error);
    }
  };

  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <AdminLayout>
        <h1>Top Batters</h1>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Position</th>
                <th>Player</th>
                <th>Team</th>
                <th>Runs</th>
                <th>Matches</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {batters.map((batter) => (
                <tr key={batter._id}>
                  <td>{batter.pos}</td>
                  <td>
                    {batter.name}
                  </td>
                  <td>{batter.team}</td>
                  <td>{batter.runs}</td>
                  <td>{batter.matches}</td>
                  <td>
                    <Button variant="warning" onClick={() => handleEdit(batter)}>Edit</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}

        {/* Edit Modal */}
        <Modal show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Batter</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedBatter && (
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Player Image</Form.Label>
                  <Form.Control type="file" onChange={handleFileChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Position</Form.Label>
                  <Form.Control
                    type="number"
                    value={selectedBatter.pos}
                    onChange={(e) => setSelectedBatter({ ...selectedBatter, pos: Number(e.target.value) })}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Player Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={selectedBatter.name}
                    onChange={(e) => setSelectedBatter({ ...selectedBatter, name: e.target.value })}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Team</Form.Label>
                  <Form.Control
                    type="text"
                    value={selectedBatter.team}
                    onChange={(e) => setSelectedBatter({ ...selectedBatter, team: e.target.value })}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Runs</Form.Label>
                  <Form.Control
                    type="number"
                    value={selectedBatter.runs}
                    onChange={(e) => setSelectedBatter({ ...selectedBatter, runs: Number(e.target.value) })}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Matches</Form.Label>
                  <Form.Control
                    type="number"
                    value={selectedBatter.matches}
                    onChange={(e) => setSelectedBatter({ ...selectedBatter, matches: Number(e.target.value) })}
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

export default TopBattersPage;
