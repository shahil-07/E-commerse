import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { capturePayment } from "@/store/shop/order-slice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

function StripeReturnPage() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const sessionId = params.get("session_id");
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    if (!sessionId) {
      setErrorMessage("Missing payment session. Please try again.");
      navigate("/shop/payment-failed");
      return;
    }

    const storedOrderId = sessionStorage.getItem("currentOrderId");
    let orderId = null;

    try {
      orderId = storedOrderId ? JSON.parse(storedOrderId) : null;
    } catch (error) {
      orderId = null;
    }

    if (!orderId) {
      setErrorMessage("Unable to find order information.");
      navigate("/shop/payment-failed");
      return;
    }

    dispatch(capturePayment({ sessionId, orderId }))
      .then((data) => {
        if (data?.payload?.success === true) {
          sessionStorage.removeItem("currentOrderId");
          window.location.href = "/shop/payment-success";
          return;
        }

        setErrorMessage(
          data?.payload?.message || "Payment verification failed."
        );
        navigate("/shop/payment-failed");
      })
      .catch(() => {
        setErrorMessage("Payment verification failed. Please try again.");
        navigate("/shop/payment-failed");
      });
  }, [sessionId, dispatch, navigate]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {errorMessage || "Processing Payment...Please wait!"}
        </CardTitle>
      </CardHeader>
    </Card>
  );
}

export default StripeReturnPage;
