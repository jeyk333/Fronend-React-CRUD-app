import {
  HomeOutlined,
  SlideshowOutlined,
  PostAddOutlined,
  BubbleChartOutlined,
  QuestionAnswerOutlined,
  SportsSoccerOutlined,
} from "@material-ui/icons";

//App Menu Lists
export const MENUS = [
  {
    id: 0,
    title: "Inicio",
    icon: <HomeOutlined />,
    link: "/",
  },
  {
    id: 1,
    title: "Mis cursos",
    icon: <SlideshowOutlined />,
    link: "/my-courses",
  },
  { id: 2, title: "Quizzes", icon: <PostAddOutlined />, link: "/quizzes" },
  {
    id: 3,
    title: "Mi plan de estudios",
    icon: <BubbleChartOutlined />,
    link: "/my-curriculum",
  },
  {
    id: 4,
    title: "Comunidad",
    icon: <QuestionAnswerOutlined />,
    link: "/community",
  },
];

//Sample Dropdown lists
export const DROPDOWN_LIST = [
  { id: 0, title: "Explorar" },
  { id: 1, title: "One" },
  { id: 2, title: "Two" },
  { id: 3, title: "Three" },
];
