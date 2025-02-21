"use client";
import { useEffect, useState } from "react";
import { Table, Button, Form, Modal } from "react-bootstrap";
import AdminLayout from "@/layouts/AdminLayout";

interface Fixture {
  _id: string;
  team1: string;
  team2: string;
  date: string;
  venue: string;
}

const FixturesPage = () => {
  const [fixtures, setFixtures] = useState<Fixture[]>([]);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);
  const [selectedFixture, setSelectedFixture] = useState<Fixture | null>(null);

  useEffect(() => {
    fetchFixtures();
  }, []);

  const fetchFixtures = async () => {
    try {
      const res = await fetch("/api/fixtures");
      const data = await res.json();
      setFixtures(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching fixtures:", error);
    }
  };

  const handleEdit = (fixture: Fixture) => {
    setSelectedFixture(fixture);
    setShow(true);
  };

  const handleSave = async () => {
    if (!selectedFixture) return;

    try {
      await fetch(`/api/fixtures/${selectedFixture._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(selectedFixture),
      });
      setShow(false);
      fetchFixtures(); // Refresh data
    } catch (error) {
      console.error("Error updating fixture:", error);
    }
  };

  return (
    <AdminLayout>
      <div>
        <h1>FIXTURES</h1>
      </div>
      

      {loading ? (
        <p>Loading...</p>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Date</th>
              <th>Name</th>
              <th>Teams</th>
              <th>Venue</th>
              <th>Time</th>
              <th>Result</th>
              <th>Permalink</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {fixtures.map((fixture) => (
              <tr key={fixture._id}>
                <td>{fixture.date}</td>
                <td>{fixture.name}</td>
                <td>{fixture.teams?.join(" vs ")}</td> 

                <td>{fixture.venue}</td>
                <td>{fixture.time}</td>
                <td>{fixture.result}</td>
                <td>{fixture.permalink}</td>
                <td>{fixture.status}</td>
                <td>
                  <Button variant="warning" onClick={() => handleEdit(fixture)}>Edit</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      {/* Edit Modal */}
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Fixture</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedFixture && (
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Result</Form.Label>
                <Form.Control
                  type="text"
                  value={selectedFixture.result}
                  onChange={(e) => setSelectedFixture({ ...selectedFixture, result: e.target.value })}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Permalink</Form.Label>
                <Form.Control
                  type="text"
                  value={selectedFixture.permalink}
                  onChange={(e) => setSelectedFixture({ ...selectedFixture, permalink: e.target.value })}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Status</Form.Label>
                <Form.Select
                  value={selectedFixture.status}
                  onChange={(e) => setSelectedFixture({ ...selectedFixture, status: e.target.value })}
                >
                  <option value="upcoming">Upcoming</option>
                  <option value="live">Live</option>
                  <option value="completed">Completed</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Time</Form.Label>
                <Form.Control
                  type="text"
                  value={selectedFixture.time}
                  onChange={(e) => setSelectedFixture({ ...selectedFixture, time: e.target.value })}
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

export default FixturesPage;
