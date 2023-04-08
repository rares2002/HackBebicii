import 'dart:convert';
import 'package:http/http.dart' as http;

enum RequestType { POST, GET, DELETE, PATCH }

class Server {
  static const String serverUrl = "172.20.10.4:3001";
  static Future<Map<String, dynamic>> apiCall(String endpoint, RequestType type,
      Map<String, dynamic> params, MapEntry<String, String>? auth) async {
    var uri = Uri.http(serverUrl, endpoint);
    http.Response response;

    print("accessing " + uri.toString());
    if (auth != null) print("authorised as: " + auth.toString());
    print("with params: " + params.toString());
    switch (type) {
      case RequestType.GET:
        var headers = <String, String>{};
        if (auth != null) {
          headers.putIfAbsent(auth.key, () => auth.value);
        }

        response = await http.get(uri, headers: headers);
        break;

      case RequestType.POST:
        var headers = <String, String>{
          'Content-Type': 'application/json; charset=UTF-8',
        };
        if (auth != null) {
          headers.putIfAbsent(auth.key, () => auth.value);
        }

        response =
            await http.post(uri, headers: headers, body: jsonEncode(params));
        break;

      default:
        throw Exception("Pass a valid request type!");
    }

    Map<String, dynamic> retObj = {};

    try {
      retObj = jsonDecode(response.body) as Map<String, dynamic>;
    } on TypeError {
      retObj = {
        "success": false,
        "data":
            "Something went really wrong. Try to restart the app or talk to one of the admins."
      };
    } on FormatException {
      retObj = {
        "success": false,
        "data":
            "Something went really wrong. Try to restart the app or talk to one of the admins."
      };
    }

    print("decoded response: " + retObj.toString());

    return retObj;
  }

  // TO DO later
  static void websocketConnection() {}
}
