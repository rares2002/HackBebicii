import 'dart:math';

import 'package:flutter/material.dart';

class User {
  String name, phone, email, id;
  String? jwt;

  @protected
  static User? _user;

  User._({
    this.jwt,
    required this.name,
    required this.id,
    required this.email,
    required this.phone,
  });

  String getJWT() {
    return jwt ?? "";
  }

  static Future<User> getUserInstance() async {
    // _user ?? = await getUserFromSP();
    print(_user);

    return Future.value(_user);
  }

  static void removeUser() async {
    _user = null;

    // SharedPreferences sp = await SharedPreferences.getInstance();
    // sp.clear();
  }

  static void createUser(Map<String, dynamic> data, String jwt) async {
    // SharedPreferences sp = await SharedPreferences.getInstance();
    // sp.setString("name", data['firstName'] + " " + data['lastName'],);
    // sp.setString("email", data['email'],);
    // sp.setString("role", data['role'],);
    // sp.setString("id", data['_id'],);
    // sp.setString("username", data['username'],);
    // sp.setString("jwt", jwt);

    _user = User._(
      jwt: jwt,
      name: data["name"],
      id: data["_id"],
      email: data["email"],
      phone: data["telephone"],
    );
    print(_user);
  }

  factory User.fromJSON(Map<String, dynamic> json) {
    // subject to change depending on /api/getUser response
    var user = User._(
      email: json['email'],
      name: json['name'],
      id: json['_id'],
      phone: json['phone'],
    );

    return user;
  }

  @protected
  // static Future<User> getUserFromSP() async {
  // SharedPreferences sp = await SharedPreferences.getInstance();

  // return User._(
  //   jwt: sp.getString('jwt'),
  //   name: sp.getString('name') ?? "",
  //   id: sp.getString('id') ?? "",
  //   email: sp.getString('email') ?? "",
  //   phone: sp.getString('phone') ?? "",

  // );
  // }

  @override
  String toString() {
    return 'User: {\n\temail: $email,\n\tname: $name,\n\trole: $phone,\n\tid: $id,\n\t}\n';
  }
}
