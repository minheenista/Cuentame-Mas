import 'package:cuentame_mas/config/theme/app_theme.dart';
import 'package:cuentame_mas/features/chats/ui/screens/chats_screen.dart';
import 'package:cuentame_mas/features/chats_guest/ui/screens/chats_guest_screen.dart';
import 'package:cuentame_mas/features/cuentame_mas/ui/screens/cuentame_mas_screen.dart';
import 'package:cuentame_mas/features/faq/ui/screens/faq_screen.dart';
import 'package:cuentame_mas/features/login/ui/screens/login_screen.dart';
import 'package:cuentame_mas/features/privacy/ui/screens/privacy_screen.dart';
import 'package:cuentame_mas/features/register/ui/screen/register_screen.dart';
import 'package:cuentame_mas/features/tos/ui/screens/tos_screen.dart';
import 'package:flutter/material.dart';
//import 'dart:typed_data';

//import 'package:go_router/go_router.dart';
// import 'package:google_fonts/google_fonts.dart';

void main() {
  runApp(const CuentameMas());
}

class CuentameMas extends StatelessWidget {
  const CuentameMas({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Cuentame +',
      theme: AppTheme().getTheme(),
      home: const MyHomePage(title: 'Cuentame +'),
      routes: {
        '/home': (context) => const MyHomePage(
            title: 'Cuentame +'), // Ruta de la página principal
        '/faq': (context) => const FaqScreen(),
        '/tos': (context) => const TosScreen(),
        '/privacy': (context) => const PrivacyScreen(),
        '/login': (context) => const LoginScreen(),
        '/register': (context) => const RegisterScreen(),
        '/chats': (context) => const ChatsScreens(),
        '/chats-guest': (context) => const ChatsGuestScreens(),
      },
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({Key? key, required this.title}) : super(key: key);

  // This widget is the home page of your application. It is stateful, meaning
  // that it has a State object (defined below) that contains fields that affect
  // how it looks.

  // This class is the configuration for the state. It holds the values (in this
  // case the title) provided by the parent (in this case the App widget) and
  // used by the build method of the State. Fields in a Widget subclass are
  // always marked "final".

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    // This method is rerun every time setState is called, for instance as done
    // by the _incrementCounter method above.
    //
    // The Flutter framework has been optimized to make rerunning build methods
    // fast, so that you can just rebuild anything that needs updating rather
    // than having to individually change instances of widgets.
    return const CuentameMasScreen();
  }
}
