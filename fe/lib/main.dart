import 'package:flutter/material.dart';
import 'package:animated_splash_screen/animated_splash_screen.dart';
void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        
        primarySwatch: Colors.blue,
      ),
      home: const MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});
  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        debugShowCheckedModeBanner: false,
        title: 'LoveSAC',
        theme: ThemeData(
            inputDecorationTheme: const InputDecorationTheme(
          labelStyle: TextStyle(fontSize: 20, color: Colors.white),
          enabledBorder: UnderlineInputBorder(
              borderSide: BorderSide(width: 3, color: Colors.white)),
          prefixIconColor: Colors.white,
        )),
        home: AnimatedSplashScreen(
          splash: Image.asset('assets/Logo.png'),
          nextScreen: const LoginPage(),
          splashTransition: SplashTransition.fadeTransition,
          backgroundColor: Colors.red.shade400,
          splashIconSize: 150,
          duration: 1500,
        ));
  }
    // return Scaffold(
    //   appBar: AppBar(
    //     title: Text(widget.title),
    //   ),
    //   body: Center(
    //     child: Column(
    //       mainAxisAlignment: MainAxisAlignment.center,
    //       children: <Widget>[
    //       ],
    //     ),
    //   ),
    //   floatingActionButton: FloatingActionButton(
    //     onPressed: _incrementCounter,
    //     tooltip: 'Increment',
    //     child: const Icon(Icons.add),
    //   ), // This trailing comma makes auto-formatting nicer for build methods.
    // );
  }

