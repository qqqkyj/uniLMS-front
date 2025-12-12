import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";

// 테스트용 페이지
import StudentProfile from "../pages/student/Profile";
import StudentCourses from "../pages/student/Courses";

const router = createBrowserRouter([
	{
		path: "/",
		Component: RootLayout,
		children: [
			{ path: "profile", Component: StudentProfile },
			{ path: "courses", Component: StudentCourses },
			{ index: true, Component: StudentProfile }, // 기본 페이지
		],
	},
]);

export default router;
