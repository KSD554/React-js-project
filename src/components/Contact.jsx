import React from "react";
import Swal from 'sweetalert2'

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "2bd0828a-2877-4f16-bbb2-1a45e171c0cb");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
        Swal.fire({
            title: "Message",
            text: "Votre message a été envoyé avec succès",
            icon: "success"
          });
      event.target.reset();
    } 
  };

  return (
    <section
      id="contact"
      className="flex justify-center items-center min-h-screen bg-gray-100"
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        {/* Titre */}
        <h2 className="text-2xl text-center text-gray-800 mb-6">Formulaire</h2>

        {/* Formulaire */}
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-800">
              Nom complet
            </label>
            <input
              type="text"
              id="name"
              className="w-full mt-1  border border-gray-300 rounded-md focus:ring-2 outline-none"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-800">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full mt-1  border border-gray-300 rounded-md focus:ring-2 outline-none"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-800">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="w-full mt-1  border border-gray-300 rounded-md focus:ring-2 outline-none"
              required
              rows={4}
            />
          </div>

          {/* button d envoi */}
          <button type="submit" className="w-full bg-slate-500 text-white py-2 rounded-lg hover:bg-slate-600">
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
