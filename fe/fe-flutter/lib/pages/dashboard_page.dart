import 'package:banking_app/data_json/balance_json.dart';
import 'package:banking_app/pages/chatGPT/SettingPage.dart';
import 'package:banking_app/pages/add_page.dart';
import 'package:banking_app/pages/card_page.dart';
import 'package:banking_app/theme/color.dart';
import 'package:flutter/material.dart';
import 'package:flutter_icons/flutter_icons.dart';
import 'package:banking_app/pages/chatGPT/SettingPage.dart';
import 'package:banking_app/models/user.dart';

class DashboardPage extends StatefulWidget {
  const DashboardPage({Key? key}) : super(key: key);
 
  @override
  State<DashboardPage> createState() => _DashbaordPageState();
}

class _DashbaordPageState extends State<DashboardPage> {
 
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: primary,
      appBar: PreferredSize(
        child: getAppBar(),
        preferredSize: Size.fromHeight(60),
      ),
      body: getBody(),
    );
  }

  
  Widget getAppBar() {
    return AppBar(
      elevation: 0,
      backgroundColor: primary,
      leading: IconButton(
          onPressed: () {},
          icon: const CircleAvatar(
            backgroundImage: NetworkImage(
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"),
          )),
      actions: [
        IconButton(
            onPressed: () {
              Navigator.push(context,
                  MaterialPageRoute(builder: (context) => SettingPage()));
            },
            icon: Icon(Icons.more_vert))
      ],
    );
  }

  Widget getBody() {
    var size = MediaQuery.of(context).size;
    return Column(
      children: [
        Container(
          width: double.infinity,
          height: size.height * 0.25,
          decoration: BoxDecoration(color: primary),
          child: Column(
            children: [
              Container(
                width: double.infinity,
                height: 110,
                child: Row(
                  children: List.generate(balanceLists.length, (index) {
                    return Padding(
                      padding: const EdgeInsets.only(right: 20),
                      child: Container(
                        width: size.width -20 ,
                        child: Column(
                          // crossAxisAlignment: CrossAxisAlignment.end,
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            Row(
                              mainAxisAlignment: MainAxisAlignment.center,
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Padding(
                                  padding: const EdgeInsets.only(top: 5),
                                  child: Text(
                                    balanceLists[index]['currency'],
                                    style: TextStyle(
                                        fontSize: 17,
                                        color: index == 0
                                            ? white
                                            : white.withOpacity(0.5),
                                        fontWeight: FontWeight.bold),
                                  ),
                                ),
                                SizedBox(
                                  width: 5,
                                ),
                                Text(
                                  balanceLists[index]['amount'],
                                  style: TextStyle(
                                      fontSize: 35,
                                      color: index == 0
                                          ? white
                                          : white.withOpacity(0.5),
                                      fontWeight: FontWeight.bold),
                                ),
                              ],
                            ),
                            SizedBox(
                              height: 8,
                            ),
                            Text(
                              balanceLists[index]['description'],
                              style: TextStyle(
                                fontSize: 15,
                                color: white.withOpacity(0.5),
                              ),
                            ),
                          ],
                        ),
                      ),
                    );
                  }),
                ),
              ),
              Expanded(
                child: Container(
                  width: double.infinity,
                  child: Row(
                    children: [
                      SizedBox(
                        width: 15,
                      ),
                      TextButton(
                        style: TextButton.styleFrom(
                            padding: EdgeInsets.zero,
                            fixedSize: Size(340 , size.height)),
                        onPressed: () => Navigator.push(
                            context,
                            MaterialPageRoute(
                                builder: (context) => AddCardPage())),

                        child:
                            // Flexible(
                            // child:
                          Container(
                          height: 50,
                          decoration: BoxDecoration(
                              color: secondary.withOpacity(0.3),
                              borderRadius: BorderRadius.circular(12)),
                          child: Center(
                            child: Text(
                              "Add card",
                              style: TextStyle(
                                  color: white, fontWeight: FontWeight.w500),
                            ),
                          ),
                        ),
                        // ),
                      ),
                      SizedBox(
                        width: 15,
                      ),
                      
                      const SizedBox(
                        width: 15,
                      ),
                    ],
                  ),
                ),
              )
            ],
          ),
        ),
        Expanded(
          child: SingleChildScrollView(
            child: Container(
              width: double.infinity,
              decoration: BoxDecoration(
                  color: white,
                  borderRadius: BorderRadius.only(
                      topLeft: Radius.circular(25),
                      topRight: Radius.circular(25))),
              child: getAccountSection(),
            ),
          ),
        ),
      ],
    );
  }

  Widget getAccountSection() {
    return Padding(
      padding: const EdgeInsets.only(top: 25, bottom: 40, left: 15, right: 15),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            "Your portofolio",
            style: TextStyle(fontSize: 17, fontWeight: FontWeight.bold),
          ),
          SizedBox(
            height: 15,
          ),
          Container(
            width: double.infinity,
            decoration: BoxDecoration(
              color: white,
              borderRadius: BorderRadius.circular(12),
              boxShadow: [
                BoxShadow(
                  color: grey.withOpacity(0.1),
                  spreadRadius: 10,
                  blurRadius: 10,
                  // changes position of shadow
                ),
              ],
            ),
            child: Padding(
              padding: const EdgeInsets.all(18),
              child: Column(
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Row(
                        children: [
                          Container(
                            width: 40,
                            height: 40,
                            decoration: BoxDecoration(
                                color: secondary.withOpacity(0.3),
                                borderRadius: BorderRadius.circular(12)),
                            child: Center(
                              child: Icon(
                                AntDesign.wallet,
                                color: primary,
                                size: 20,
                              ),
                            ),
                          ),
                          SizedBox(
                            width: 15,
                          ),
                          Text(
                            "40832-810-5-7000-012345",
                            style: TextStyle(fontSize: 15),
                          )
                        ],
                      ),
                      Icon(
                        Icons.keyboard_arrow_down,
                        color: primary,
                      )
                    ],
                  ),
                  SizedBox(
                    height: 5,
                  ),
                  Padding(
                    padding: const EdgeInsets.only(left: 50),
                    child: Divider(
                      thickness: 0.2,
                    ),
                  ),
                  SizedBox(
                    height: 10,
                  ),
                  Row(
                    children: [
                      Container(
                        width: 40,
                        height: 40,
                        decoration: BoxDecoration(
                            color: secondary.withOpacity(0.3),
                            borderRadius: BorderRadius.circular(12)),
                        child: Center(
                          child: Icon(
                            MaterialIcons.euro_symbol,
                            color: primary,
                            size: 20,
                          ),
                        ),
                      ),
                      SizedBox(
                        width: 15,
                      ),
                      Text(
                        "18 199.24 EUR",
                        style: TextStyle(
                            fontSize: 15, fontWeight: FontWeight.w600),
                      )
                    ],
                  ),
                  SizedBox(
                    height: 5,
                  ),
                  Padding(
                    padding: const EdgeInsets.only(left: 50),
                    child: Divider(
                      thickness: 0.2,
                    ),
                  ),
                  SizedBox(
                    height: 10,
                  ),
                  Row(
                    children: [
                      Container(
                        width: 40,
                        height: 40,
                        decoration: BoxDecoration(
                            color: secondary.withOpacity(0.3),
                            borderRadius: BorderRadius.circular(12)),
                        child: Center(
                          child: Icon(
                            MaterialCommunityIcons.currency_gbp,
                            color: primary,
                            size: 20,
                          ),
                        ),
                      ),
                      SizedBox(
                        width: 15,
                      ),
                      Text(
                        "36.67 GBP",
                        style: TextStyle(
                            fontSize: 15, fontWeight: FontWeight.w600),
                      )
                    ],
                  ),
                ],
              ),
            ),
          ),
          SizedBox(
            height: 25,
          ),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text(
                "Cards",
                style: TextStyle(fontSize: 17, fontWeight: FontWeight.bold),
              ),
              
            ],
          ),
          SizedBox(
            height: 15,
          ),
          GestureDetector(
            child: Container(
              width: double.infinity,
              decoration: BoxDecoration(
                color: white,
                borderRadius: BorderRadius.circular(12),
                boxShadow: [
                  BoxShadow(
                    color: grey.withOpacity(0.1),
                    spreadRadius: 10,
                    blurRadius: 10,
                    // changes position of shadow
                  ),
                ],
              ),
              child: Padding(
                padding: const EdgeInsets.all(18),
                child: Column(
                  children: [
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Row(
                          children: [
                            Container(
                              width: 40,
                              height: 40,
                              decoration: BoxDecoration(
                                  color: secondary.withOpacity(0.3),
                                  borderRadius: BorderRadius.circular(12)),
                              child: Center(
                                child: Icon(
                                  AntDesign.creditcard,
                                  color: primary,
                                  size: 20,
                                ),
                              ),
                            ),
                            SizedBox(
                              width: 15,
                            ),
                            Text(
                              "EUR *2330",
                              style: TextStyle(
                                fontSize: 15,
                              ),
                            )
                          ],
                        ),
                        Text(
                          "8 199.24 EUR",
                          style: TextStyle(
                              fontSize: 15, fontWeight: FontWeight.w600),
                        )
                      ],
                    )
                  ],
                ),
              ),
            ),
          )
        ],
      ),
    );
  }
}
