import React, { useEffect, useState } from "react";

const MIN = 300;
const MAX = 700;

const PaymentCard: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const second = Math.random() * (MAX - MIN) + MIN;
    setTimeout(() => {
      setIsLoading(false);
    }, second);
  }, []);

  if (isLoading) return <div>로딩중</div>;
  return <div>PaymentCard</div>;
};

export default PaymentCard;
