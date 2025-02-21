"use client";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';



const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("admin_authenticated");
    if (!user) {
      router.push("/admin-login");
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  if (!isAuthenticated) return <p className="text-center mt-5">Redirecting...</p>;

  const handleLogout = () => {
    localStorage.removeItem("admin_authenticated");
    router.push("/admin-login");
  };

  return (
    <>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand>Admin Panel</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Link className="nav-link" href="/admin">Dashboard</Link> */}
            <Link className="nav-link" href="/admin/fixtures">Fixtures</Link>
            <Link className="nav-link" href="/admin/standings">Standings</Link>
            {/* <Link className="nav-link" href="/admin/users">Users</Link>
            <Link className="nav-link" href="/admin/settings">Settings</Link> */}
          </Nav>
          <Button variant="danger" onClick={handleLogout}>Logout</Button>
        </Container>
      </Navbar>

      {/* Page Content */}
      <Container className="mt-4">{children}</Container>

      {/* Footer */}
      <footer className="bg-dark text-light text-center py-3 mt-5">
        <Container>
          <p className="mb-0">&copy; {new Date().getFullYear()} ASPORTS Admin Panel. All rights reserved.</p>
        </Container>
      </footer>
    </>
  );
};

export default AdminLayout;
