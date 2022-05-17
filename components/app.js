import React, { useState } from "react";
import "./style.css";

const data = [
  {
    UserId: "USER_2022AAB02D2314F2",
    PropertyId: "PROP_202206529869D192",
    PropertyUserId: "Ecowrap",
    PropertyType: "Business",
    Latitude: "26.86551125956824",
    Longitude: "75.78607957810163",
    ContactPerson: "Angraj",
    ContactNumber: "9269099901",
    Address:
      "161, Gopalpura Bypass Rd, undertriveni Flyover, 10-B Scheme, Gangotri Nagar, Gopal Pura Mode, Jaipur, Rajasthan 302018, India",
    FloorStreet: "First flor",
    Landmark: "Gopalpura Bypass",
    Direction: "",
    Verified: 0,
    VerifiedMessage: "",
    CreationTime: "2022-04-15T12:08:45.000Z",
    DeleteStatus: 1,
    CompletePickups: 0,
    CancelledPickups: 0,
    PropertyWeight: null,
    PickupDate: null,
    AvarageRating: "0",
    City: "Jaipur",
    State: "Rajasthan",
  },
  {
    UserId: "1",
    ContactPerson: "Laksh",
    ContactNumber: "300000001",
    AvarageRating: "9",
  },
  {
    UserId: "2",
    ContactPerson: "Yash",
    ContactNumber: "1000000001",
    AvarageRating: "3",
  },
  {
    UserId: "3",
    ContactPerson: "Ankit",
    ContactNumber: "200012342",
    AvarageRating: "2",
  },
];

export default function Table() {
  const [sortedField, setsortedField] = useState(null);
  const sortedData = [...data];
  if (sortedField !== null) {
    sortedData.sort((a, b) => {
      if (a[sortedField] < b[sortedField]) {
        return -1;
      }
      if (a[sortedField] > b[sortedField]) {
        return 1;
      }
      return 0;
    });
  }
  return (
    <div>
      <br />
      <table id="my_table">
        <caption>
          Just click on any column heading to sort table based on that column
        </caption>
        <thead>
          <tr>
            <th>
              <button
                onClick={() => {
                  setsortedField("UserId");
                }}
              >
                UserId
              </button>
            </th>
            <th>
              <button
                onClick={() => {
                  setsortedField("ContactPerson");
                }}
              >
                ContactPerson
              </button>
            </th>
            <th>
              <button
                onClick={() => {
                  setsortedField("ContactNumber");
                }}
              >
                ContactNumber
              </button>
            </th>
            <th>
              <button
                onClick={() => {
                  setsortedField("PickupDate");
                }}
              >
                PickupDate
              </button>
            </th>
            <th>
              <button
                onClick={() => {
                  setsortedField("AvarageRating");
                }}
              >
                AvarageRating
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((obj) => (
            <tr>
              <td>{obj.UserId}</td>
              <td>{obj.ContactPerson}</td>
              <td>{obj.ContactNumber}</td>
              <td>{obj.PickupDate}</td>
              <td>{obj.AvarageRating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
