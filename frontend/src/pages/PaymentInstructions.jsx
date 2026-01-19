import { useLocation } from "react-router-dom";
import { CreditCard, MessageCircle } from "lucide-react";
import Title from "../components/Title";

const PaymentInstructions = () => {
  const location = useLocation();
  const { amount } = location.state || { amount: 0 };
  const bankAccounts = [
    {
      bank: "Zenith Bank",
      accountName: "Poheav Beauty",
      accountNumber: "1229018021",
    },
    {
      bank: "Monie Point",
      accountName: "Poheav Beauty",
      accountNumber: "6327665385",
    },
    {
      bank: "UBA",
      accountName: "Poheav Beauty",
      accountNumber: "1026347748",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-16 px-4 sm:px-14">
      <div className="max-w-2xl mx-auto">
        <Title text1="PAYMENT" text2="INSTRUCTIONS" />

        {/* Amount Card */}
        <div className="mt-8 bg-white rounded-2xl shadow-lg p-6 text-center">
          <p className="text-gray-600 text-lg">Please pay the total amount</p>
          <h2 className="text-3xl font-bold text-indigo-600 mt-2">
            ₦{amount.toLocaleString()}
          </h2>
        </div>
        {/* Bank Details */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {bankAccounts.map((account, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-2 mb-4 text-indigo-600">
                <CreditCard size={22} />
                <h3 className="text-lg font-semibold">{account.bank}</h3>
              </div>

              <div className="space-y-2 text-gray-700">
                <p>
                  <span className="font-medium">Account Name:</span>{" "}
                  {account.accountName}
                </p>
                <p>
                  <span className="font-medium">Account Number:</span>{" "}
                  <span className="tracking-wider font-semibold">
                    {account.accountNumber}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp Instruction */}
        <div className="mt-6 bg-indigo-600 text-white rounded-2xl p-6 text-center shadow-lg">
          <MessageCircle className="mx-auto mb-2" size={28} />
          <p className="text-lg">
            After payment, send a screenshot to our admin on WhatsApp
          </p>

          <a
            href="https://wa.me/2348123971007"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-white text-indigo-600 px-6 py-2 rounded-full font-semibold hover:bg-indigo-50 transition"
          >
            Chat Admin on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default PaymentInstructions;
