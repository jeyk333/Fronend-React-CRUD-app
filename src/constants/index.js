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
  },
  {
    id: 1,
    title: "Mis cursos",
    icon: <SlideshowOutlined />,
  },
  { id: 2, title: "Quizzes", icon: <PostAddOutlined /> },
  { id: 3, title: "Mi plan de estudios", icon: <BubbleChartOutlined /> },
  { id: 4, title: "Comunidad", icon: <QuestionAnswerOutlined /> },
  { id: 5, title: "Centro de ayuda", icon: <SportsSoccerOutlined /> },
];

//Sample Dropdown lists
export const DROPDOWN_LIST = [
  { id: 0, title: "Explorar" },
  { id: 1, title: "One" },
  { id: 2, title: "Two" },
  { id: 3, title: "Three" },
];
