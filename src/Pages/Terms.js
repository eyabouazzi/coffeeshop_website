import React from "react";

function Terms() {
  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-[#4E342E]">Terms and Conditions</h1>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-2 ml-80">Introduction</h2>
            <p>Welcome to MsCafe. By accessing or using our website, you agree to be bound by these Terms and conditions. If you do not agree with these Terms, please do not use our website.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2 ml-72">Use of the Website</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Prohibited Activities:</strong> You agree not to engage in any of the following prohibited activities:
                <ul className="list-disc pl-5 space-y-1">
                  <li>Using the website for any unlawful purpose.</li>
                  <li>Introducing viruses, malware, or other harmful code to the website.</li>
                  <li>Attempting to gain unauthorized access to our systems or networks.</li>
                  <li>Using the website to harass, abuse, or harm others.</li>
                </ul>
              </li>
              <li><strong>Account Security:</strong> If you create an account on our website, you are responsible for maintaining the confidentiality of your login information and for all activities that occur under your account.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2 ml-72">Product Information</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Accuracy:</strong> We strive to provide accurate product descriptions, prices, and availability. However, errors may occur, and we reserve the right to correct any errors or inaccuracies at any time.</li>
              <li><strong>Product Changes:</strong> We reserve the right to modify or discontinue any product at any time without prior notice.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2 ml-72">Payment and Billing</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Payment Methods:</strong> We accept credit cards, debit cards and PayPal.</li>
              <li><strong>Order Acceptance:</strong> Your order is an offer to purchase our products. We reserve the right to accept or reject any order at our discretion.</li>
              <li><strong>Billing Information:</strong> You agree to provide accurate and complete billing information. If there are any issues with your payment, we may contact you for verification purposes.</li>
              <li><strong>Payment Security:</strong> We use secure payment processing systems to protect your financial information. However, we are not responsible for any unauthorized access or use of your payment information.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2 ml-72">Shipping and Delivery</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Shipping Methods:</strong> We offer various shipping options. Please refer to our Shipping Policy for details on available shipping methods and estimated delivery times.</li>
              <li><strong>Delivery Times:</strong> Delivery times are estimates and may vary based on factors beyond our control, such as shipping carrier delays or customs processing.</li>
              <li><strong>Shipping Fees:</strong> Shipping fees are calculated based on the shipping method and destination. These fees will be displayed during the checkout process.</li>
              <li><strong>Order Tracking:</strong> Once your order is shipped, you will receive a tracking number to monitor the status of your shipment.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2 ml-72">Returns and Refunds</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Return Policy:</strong> You may return unused and unopened products within 30 days of purchase for a full refund. To initiate a return, please contact our customer service team.</li>
              <li><strong>Refund Process:</strong> Refunds will be processed within 7-10 business days after we receive the returned product. Refunds will be issued to the original payment method.</li>
              <li><strong>Exchanges:</strong> If you wish to exchange a product, please contact us to arrange the exchange. Exchanges are subject to product availability.</li>
              <li><strong>Damaged or Defective Products:</strong> If you receive a damaged or defective product, please contact us immediately. We will provide a replacement or refund at no additional cost.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2 ml-72">Intellectual Property</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Ownership:</strong> All content on this website, including text, graphics, logos, images, and software, is the property of MsCafe and is protected by copyright, trademark, and other intellectual property laws.</li>
              <li><strong>Use of Content:</strong> You may not use, reproduce, distribute, or create derivative works from any content on this website without our prior written permission.</li>
              <li><strong>Third-Party Content:</strong> Our website may contain content provided by third parties. We do not endorse or assume responsibility for any third-party content.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2 ml-72">Limitation of Liability</h2>
            <p><strong>Disclaimer:</strong> Our website and products are provided "as is" and "as available" without warranties of any kind, either express or implied. We disclaim all warranties, including but not limited to, implied warranties of merchantability and fitness for a particular purpose.</p>
            <p><strong>Limitation:</strong> MsCafe is not liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use our website or products. This limitation applies to any damages or injury caused by any failure of performance, error, omission, interruption, defect, delay in operation or transmission, computer virus, or line failure.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2 ml-52">Changes to Terms and Conditions</h2>
            <p><strong>Modifications:</strong> We reserve the right to modify these Terms at any time. Any changes will be effective immediately upon posting on our website. Your continued use of the website constitutes acceptance of the updated Terms.</p>
            <p><strong>Notification:</strong> We may provide notice of changes to these Terms by email or through other reasonable means.</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Terms;
