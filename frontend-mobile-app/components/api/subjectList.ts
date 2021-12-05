import "dayjs/locale/uk";
import dayjs from "dayjs";

export const scheduleListToday = [
  {
    key: "1",
    title: "Англійська мова",
    teacher: "Мохнацька Інга Златівна",
    time: "09:50",
    place: "8 корпус, 301 аудиторія",
    link: "https://meet.google.com/rac-hhnn-smy",
  },
  {
    key: "2",
    title: "Крос-платформене програмування ",
    teacher: "Белькевич Єва Артурівна",
    time: "11:30",
    place: "8 корпус, 312 аудиторія",
    link: "https://meet.google.com/rac-hhnn-smy",
  },
  {
    key: "3",
    title: "Технології створення програмних продуктів",
    teacher: "Яценко Ірина Тарасівна",
    time: "02:43",
    place: "8 корпус, 310 аудиторія",
    link: "https://meet.google.com/rac-hhnn-smy",
  },
  {
    key: "4",
    title: "Технології створення програмних продуктів",
    teacher: "Яценко Ірина Тарасівна",
    time: "02:43",
    place: "8 корпус, 310 аудиторія",
    link: "https://meet.google.com/rac-hhnn-smy",
  },
];

export const scheduleData = [
  {
    data: scheduleListToday,
    title: dayjs().locale("uk").format("dddd"),
    date: dayjs().format("DD.MM.YYYY"),
  },
  {
    data: scheduleListToday,
    title: dayjs().add(1, "day").locale("uk").format("dddd"),
    date: dayjs().add(1, "day").format("DD.MM.YYYY"),
  },
  {
    data: scheduleListToday,
    title: dayjs().add(2, "day").locale("uk").format("dddd"),
    date: dayjs().add(2, "day").format("DD.MM.YYYY"),
  },
];
