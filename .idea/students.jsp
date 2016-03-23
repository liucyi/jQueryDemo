<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ page import="com.test.javaweb.mvc.Student"%>
<%@ page import="java.text.*"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
	SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
	
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<base href="<%=basePath%>">

<title>My JSP 'students.jsp' starting page</title>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->

</head>

<body>
	<%
		List<Student> students = (List<Student>) request
				.getAttribute("students");
	%>

	<table>
		<tr>
			<th>id</th>
			<th>userName</th>
			<th>passWord</th>
			<th>createTime</th>
			<th>status</th>
		</tr>
		<%
			for (Student student : students) {
		%>
		<tr>
			<td><%=student.getId()%></td>
			<td><%=student.getUserName()%></td>
			<td><%=student.getPassWord()%></td>
			<td><%=sdf.format(student.getCreateTime()) %></td>
			<td><%=student.getStatus()%></td>
		</tr>

		<%
			}
		%>
	</table>

</body>
</html>
