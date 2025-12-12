import React from "react";
import { NavLink, Outlet } from "react-router-dom";

// 예시: 임시로 학생 역할로 설정
const userRole = "student";

// 메뉴 구성
const menuConfig = {
	student: [
		{ name: "프로필", path: "profile" },
		{ name: "수강 목록", path: "courses" },
		{ name: "수강 신청", path: "enroll" },
		{ name: "수강 시간표", path: "timetable" },
		{ name: "공지사항", path: "notice" },
	],
};

export default function RootLayout() {
	const menu = menuConfig[userRole] || [];

	return (
		<div>
			{/* 상단 메뉴바 */}
			<nav style={{ padding: "10px", backgroundColor: "#eee" }}>
				{menu.map((item) => (
					<NavLink
						key={item.path}
						to={item.path}
						style={({ isActive }) => ({
							marginRight: "15px",
							fontWeight: isActive ? "bold" : "normal",
							color: isActive ? "blue" : "black",
						})}
					>
						{item.name}
					</NavLink>
				))}
			</nav>

			{/* 자식 페이지 렌더링 위치 */}
			<div style={{ padding: "20px" }}>
				<Outlet />
			</div>
		</div>
	);
}
