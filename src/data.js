import signup from "./assets/images/signup.png";
import resources from "./assets/images/resources.png";
import learning from "./assets/images/learning.png";
import tracking from "./assets/images/tracking.png";
import studentOne from "./assets/images/studentone.png";
import studentTwo from "./assets/images/studenttwo.png";
import studentThree from "./assets/images/parent.png";
import teacherstaff from "./assets/images/doctor.jpg";

const whatWeDo = [
  {
    id: 1,
    img: signup,
    title: "Sign Up",
    text: "Create your account in minutes and set your study goal",
  },
  {
    id: 2,
    img: resources,
    title: "Choose  Subject",
    text: "Select from a wide range of school subjects and exam prep options",
  },
  {
    id: 3,
    img: learning,
    title: "Learn With Ai",
    text: "Get smart summaries, adaptive quizzes, and personalized study paths",
  },
  {
    id: 4,
    title: "Track Progress",
    img: tracking,
    text: "See insights and stay motivated as you achieve milestones",
  },
];

export const testimonials = [
  {
    name: "Mary Joseph",
    role: "Student, PortHarcourt",
    feedback:
      "FuturePrep AI helped me study smarter, not harder. The quizzes keep me focused every day",
    image: studentOne,
    stars: 5,
  },
  {
    name: "Ayomide Ajayi",
    role: "Student, Lagos",
    feedback: "Cheaper than lesson teachers and always available. I love it!!",
    image: studentTwo,
    stars: 5,
  },
  {
    name: "Mrs Deola",
    role: "Student, PortHarcourt",
    feedback:
      "As a parent, I’ve seen my child grow more confident in school since using FuturePrep AI",
    image: studentThree,
    stars: 5,
  },
  {
    name: "Mr Yusuf",
    role: "Teacher, Abuja",
    feedback:
      "My students revise faster, retain more. It’s like having an assistant teacher 24/7.",
    image: teacherstaff,
    stars: 4,
  },
];

export default whatWeDo;
