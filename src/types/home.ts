export default interface Home {
  clients: string[];
  partners: string[];
  hero: {
    title?: string;
    subtitle?: string;
    description?: string;
    image?: string;
  }[];
}

export interface Hierarchy {
  // "managing"
}
// {
//   "ceo": {
//     "name": "Jane Doe",
//     "role": "CEO",
//     "image": "https://via.placeholder.com/150"
//   },
//   "managers": [
//     {
//       "name": "John Smith",
//       "role": "Manager",
//       "image": "https://via.placeholder.com/150"
//     },
//     {
//       "name": "Emily Davis",
//       "role": "Manager",
//       "image": "https://via.placeholder.com/150"
//     }
//   ],
//   "employees": [
//     {
//       "name": "Michael Brown",
//       "role": "Employee",
//       "image": "https://via.placeholder.com/150"
//     },
//     {
//       "name": "Sarah Wilson",
//       "role": "Employee",
//       "image": "https://via.placeholder.com/150"
//     }
//   ]
// }
