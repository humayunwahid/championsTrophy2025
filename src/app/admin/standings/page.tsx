"use client";
import { useEffect, useState } from "react";
import { Table, Button, Form, Modal } from "react-bootstrap";
import AdminLayout from "@/layouts/AdminLayout";

interface Standing {
  _id: string;
  team: string;
  group: string;
  played: number;
  won: number;
  lost: number;
  nr: number;
  tied: number;
  points: number;
  net_rr: string;
}

const StandingsPage = () => {
  const [standings, setStandings] = useState<Standing[]>([]);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);
  const [selectedStanding, setSelectedStanding] = useState<Standing | null>(null);

  useEffect(() => {
    fetchStandings();
  }, []);

  const fetchStandings = async () => {
    try {
      const res = await fetch("/api/standings");
      const data = await res.json();
      setStandings(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching standings:", error);
    }
  };

  const handleEdit = (standing: Standing) => {
    setSelectedStanding(standing);
    setShow(true);
  };

  const handleSave = async () => {
    if (!selectedStanding) return;

    try {
      const { _id, ...updatedData } = selectedStanding;

      const res = await fetch(`/api/standings/${_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData), // Send updated fields
      });

      if (res.ok) {
        alert("Standings updated successfully");
        setShow(false);
        fetchStandings(); // Refresh data
      } else {
        const errorData = await res.json();
        alert(`Error: ${errorData.error}`);
      }
    } catch (error) {
      console.error("Error updating standings:", error);
    }
  };

  return (
    <AdminLayout>
      <h1>STANDINGS</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Team</th>
              <th>Group</th>
              <th>Played</th>
              <th>Won</th>
              <th>Lost</th>
              <th>N/R</th>
              <th>Tied</th>
              <th>Points</th>
              <th>Net RR</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {standings.map((standing) => (
              <tr key={standing._id}>
                <td>{standing.team.toUpperCase()}</td>
                <td>{standing.group.toUpperCase()}</td>
                <td>{standing.played}</td>
                <td>{standing.won}</td>
                <td>{standing.lost}</td>
                <td>{standing.nr}</td>
                <td>{standing.tied}</td>
                <td>{standing.points}</td>
                <td>{standing.net_rr}</td>
                <td>
                  <Button variant="warning" onClick={() => handleEdit(standing)}>Edit</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      {/* Edit Modal */}
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Standing</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedStanding && (
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Team</Form.Label>
                <Form.Control
                  disabled
                  type="text"
                  value={selectedStanding.team}
                  onChange={(e) => setSelectedStanding({ ...selectedStanding, team: e.target.value })}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Group</Form.Label>
                <Form.Control
                  disabled
                  type="text"
                  value={selectedStanding.group}
                  onChange={(e) => setSelectedStanding({ ...selectedStanding, group: e.target.value })}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Played</Form.Label>
                <Form.Control
                  type="number"
                  value={selectedStanding.played}
                  onChange={(e) => setSelectedStanding({ ...selectedStanding, played: Number(e.target.value) })}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Won</Form.Label>
                <Form.Control
                  type="number"
                  value={selectedStanding.won}
                  onChange={(e) => setSelectedStanding({ ...selectedStanding, won: Number(e.target.value) })}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Lost</Form.Label>
                <Form.Control
                  type="number"
                  value={selectedStanding.lost}
                  onChange={(e) => setSelectedStanding({ ...selectedStanding, lost: Number(e.target.value) })}
                />
              </Form.Group>
              {/* <Form.Group className="mb-3">
                <Form.Label>N/R</Form.Label>
                <Form.Control
                  type="number"
                  value={selectedStanding.nr}
                  onChange={(e) => setSelectedStanding({ ...selectedStanding, nr: Number(e.target.value) })}
                />
              </Form.Group> */}
              <Form.Group className="mb-3">
                <Form.Label>Tied</Form.Label>
                <Form.Control
                  type="number"
                  value={selectedStanding.tied}
                  onChange={(e) => setSelectedStanding({ ...selectedStanding, tied: Number(e.target.value) })}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Points</Form.Label>
                <Form.Control
                  type="number"
                  value={selectedStanding.points}
                  onChange={(e) => setSelectedStanding({ ...selectedStanding, points: Number(e.target.value) })}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Net RR</Form.Label>
                <Form.Control
                  type="text"
                  value={selectedStanding.net_rr}
                  onChange={(e) => setSelectedStanding({ ...selectedStanding, net_rr: e.target.value })}
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
  );
};

export default StandingsPage;
