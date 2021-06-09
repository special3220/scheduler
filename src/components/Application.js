import React, { useEffect, useState } from "react";
import axios from 'axios'


import DayList from './DayList';
import Appointment from "components/Appointment/"
import InterviewerListItem from './InterviewerListItem'
import "components/Application.scss";


const appointments = [
  {
    id: 1,
    time: "12pm",
  },
  {
    id: 2,
    time: "1pm",
    interview: {
      student: "Lydia Miller",
      interviewer: {
        id: 1,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  },
  {
    id: 3,
    time: "2pm",
  },
  {
    id: 6,
    time: "3pm",
    interview: {
      student: "Tawfiq Khan",
      interviewer: {
        id: 1,
        name: "Cohana Roy",
        avatar: "https://i.imgur.com/FK8V841.jpg",
      }
    }
  },
  {
    id: 4,
    time: "4pm",
  },
];

export default function Application(props) {

  const allAppointments = appointments.map(appointment => {
    return (
      <Appointment
        key={appointment.id}
        {...appointment}
      />)
  })

  const [day, setDay] = useState("Monday")
  const [days, setDays] = useState([])

  const interviewers = [
    { id: 1, name: "Sylvia Palmer", avatar: "https://i.imgur.com/LpaY82x.png" },
    { id: 2, name: "Tori Malcolm", avatar: "https://i.imgur.com/Nmx0Qxo.png" },
    { id: 3, name: "Mildred Nazir", avatar: "https://i.imgur.com/T2WwVfS.png" },
    { id: 4, name: "Cohana Roy", avatar: "https://i.imgur.com/FK8V841.jpg" },
    { id: 5, name: "Sven Jones", avatar: "https://i.imgur.com/twYrpay.jpg" }
  ];
  useEffect(()=> {
    axios.get('http://localhost:8001/api/days')
      .then(res => {
        setDays(res.data)
      })
  })
  return (
    <main className="layout">
      <section className="sidebar">
        {/* Replace this with the sidebar elements during the "Project Setup & Familiarity" activity. */}
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList
            days={days}
            day={day}
            setDay={setDay}
          />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
        {/* <InterviewerListItem /> */}
      </section>
      <section className="schedule">
        {allAppointments}
      </section>
    </main>
  );
}
