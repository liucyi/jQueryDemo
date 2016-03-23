package com.test.javaweb.mvc;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class StudentDao {
	public List<Student> getAll() {
		List<Student> students = new ArrayList<Student>();
		Connection connection = null;
		PreparedStatement preparedStatement = null;
		ResultSet resultSet = null;
		try {
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
			String driverString = "com.mysql.jdbc.Driver";
			String url = "jdbc:mysql://127.0.0.1:3306/uracsdb";
			String user = "root";
			String password = "123456";
			Class.forName(driverString);
			connection = DriverManager.getConnection(url, user, password);
			String sqlString = "select * from t_app_user";
			preparedStatement = connection.prepareStatement(sqlString);
			resultSet = preparedStatement.executeQuery();
			while (resultSet.next()) {
				int id = resultSet.getInt(1);
				String userName = resultSet.getString(2);
				String passWord = resultSet.getString(3);
			 	Date createTime = sdf.parse(resultSet.getString(4));
				int status = resultSet.getInt(6);
				Student student = new Student(id, userName, passWord,
					 createTime, 
						status);
   
				students.add(student);
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {

			try {
				if (resultSet != null) {
					resultSet.close();
				}

			} catch (Exception e2) {
				// TODO: handle exception
			}
			try {
				if (preparedStatement != null) {
					preparedStatement.close();
				}

			} catch (Exception e2) {
				// TODO: handle exception
			}
			try {
				if (connection != null) {
					connection.close();
				}

			} catch (Exception e2) {
				// TODO: handle exception
			}

		}

		return students;
	}
}
