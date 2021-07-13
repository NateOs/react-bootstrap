import { React} from "react";
import { Toast } from "react-bootstrap";

export default function Confirmation({ toggle }) {
  return (
    <Toast closeButton={false} onClose={toggle}>
      <Toast.Header>
        <strong className="mr-auto">Your order is in the oven</strong>
        <small>Just now</small>
      </Toast.Header>
      <Toast.Body>Your order is on the way</Toast.Body>
    </Toast>
  );
}
