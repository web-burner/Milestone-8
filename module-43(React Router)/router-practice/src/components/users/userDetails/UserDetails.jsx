import { useLoaderData, useNavigate } from "react-router";

const UserDetails = () => {
  const userDetails = useLoaderData();
  const { name, username, email, phone, website } = userDetails;
  const navigate = useNavigate();
  return (
    <div className=" border border-gray-200 rounded-xl p-5">
      <div>
        <p>Name: {name}</p>
        <p>UserName: {username}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>Website: {website}</p>
      </div>
      <button
        className=" border px-3 py-2 rounded-xl"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
    </div>
  );
};

export default UserDetails;

// {
//     "id": 2,
//     "name": "Ervin Howell",
//     "username": "Antonette",
//     "email": "Shanna@melissa.tv",
//     "address": {
//         "street": "Victor Plains",
//         "suite": "Suite 879",
//         "city": "Wisokyburgh",
//         "zipcode": "90566-7771",
//         "geo": {
//             "lat": "-43.9509",
//             "lng": "-34.4618"
//         }
//     },
//     "phone": "010-692-6593 x09125",
//     "website": "anastasia.net",
//     "company": {
//         "name": "Deckow-Crist",
//         "catchPhrase": "Proactive didactic contingency",
//         "bs": "synergize scalable supply-chains"
//     }
// }
