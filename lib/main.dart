import 'package:cuentame_mas/config/theme/app_theme.dart';
import 'package:cuentame_mas/features/faq/ui/screens/faq_screen.dart';
import 'package:cuentame_mas/features/privacy/ui/screens/privacy_screen.dart';
import 'package:cuentame_mas/features/tos/ui/screens/tos_screen.dart';
import 'package:flutter/material.dart';
import 'dart:typed_data';

import 'package:go_router/go_router.dart';
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
        '/faq': (context) => const FaqScreen(),
        '/tos': (context) => TosScreen(),
        '/privacy': (context) => PrivacyScreen(),
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
    return Scaffold(
        appBar: AppBar(
          backgroundColor: const Color(0xffF09D99),
          titleSpacing: 0,
          title: Row(
            children: [
              // Logo de la aplicación
              Padding(
                padding: const EdgeInsets.only(
                  left: 16.0,
                ),
                child: Image.asset(
                  'assets/logojpg.png',
                  width: 50,
                  height: 50,
                ),
              ),
              const SizedBox(width: 10),
              // Título de la aplicación
              const Text(
                'Cuentame +',
                style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
              ),

              const Padding(padding: EdgeInsets.symmetric(horizontal: 20)),
              if (MediaQuery.of(context).size.width > 888)
                Row(
                  children: [
                    TextButton(
                        onPressed: () {
                          Navigator.of(context).pushNamed('/faq');
                        },
                        child: const Text(
                          "Preguntas Frecuentes",
                          style: TextStyle(
                              fontWeight: FontWeight.bold,
                              color: Color(0xff292929)),
                        )),
                    const SizedBox(
                      width: 20,
                    ),
                    TextButton(
                        onPressed: () {
                          Navigator.of(context).pushNamed('/tos');
                        },
                        child: const Text(
                          "Terminos y Condiciones",
                          style: TextStyle(
                              fontWeight: FontWeight.bold,
                              color: Color(0xff292929)),
                        )),
                    const SizedBox(
                      width: 20,
                    ),
                    TextButton(
                        onPressed: () {
                          Navigator.of(context).pushNamed('/privacy');
                        },
                        child: const Text(
                          "Politicas de Privacidad",
                          style: TextStyle(
                              fontWeight: FontWeight.bold,
                              color: Color(0xff292929)),
                        )),
                  ],
                ),
            ],
          ),
          actions: [
            // Botón de iniciar sesión solo en escritorio
            if (MediaQuery.of(context).size.width > 880)
              Padding(
                padding: const EdgeInsets.only(
                    right: 16.0, top: 10.0, bottom: 10.0, left: 20.0),
                child: TextButton(
                  onPressed: () {
                    // Acción del botón
                  },
                  style: ButtonStyle(
                    backgroundColor: MaterialStateProperty.all<Color>(
                        const Color(0xff292929)), // Color de fondo
                    shape: MaterialStateProperty.all<RoundedRectangleBorder>(
                      RoundedRectangleBorder(
                        borderRadius:
                            BorderRadius.circular(200.0), // Radio de los bordes
                      ),
                    ),
                  ),
                  child: const Text(
                    'Iniciar Sesión',
                    style: TextStyle(color: Colors.white),
                  ),
                ),
              ),
          ],
        ),
        endDrawer: MediaQuery.of(context).size.width < 880
            ? Drawer(
                backgroundColor: const Color(0xffF09D99),
                child: ListView(
                  padding: EdgeInsets.zero,
                  children: <Widget>[
                    DrawerHeader(
                      child: Container(
                        alignment: Alignment.centerLeft,
                        child: Column(
                          children: const [
                            Image(
                              image: AssetImage('assets/logojpg.png'),
                              height: 89,
                              alignment: Alignment.centerLeft,
                            ),
                            Text(
                              'Cuentame +',
                              style: TextStyle(
                                  color: Colors.white,
                                  fontSize: 32,
                                  fontWeight: FontWeight.bold),
                            ),
                          ],
                        ),
                      ),
                    ),
                    ListTile(
                      tileColor: const Color.fromARGB(255, 219, 135, 131),
                      leading:
                          const Icon(Icons.home_rounded, color: Colors.white),
                      title: const Text(
                        'Menu Principal',
                        style: TextStyle(color: Colors.white),
                      ),
                      onTap: () {
                        // Acciones de la ruta
                      },
                    ),
                    ListTile(
                      leading: const Icon(Icons.question_answer_rounded,
                          color: Color(0xff292929)),
                      title: const Text(
                        'Preguntas Frecuentes',
                        style: TextStyle(color: Color(0xff292929)),
                      ),
                      onTap: () {
                        // Acciones de la ruta
                        Navigator.of(context).pushNamed('/faq');
                      },
                    ),
                    ListTile(
                      leading: const Icon(Icons.article_rounded,
                          color: Color(0xff292929)),
                      title: const Text(
                        'Términos y Condiciones',
                        style: TextStyle(color: Color(0xff292929)),
                      ),
                      onTap: () {
                        // Acciones de la ruta
                        Navigator.of(context).pushNamed('/tos');
                      },
                    ),
                    ListTile(
                      leading: const Icon(Icons.privacy_tip_rounded,
                          color: Color(0xff292929)),
                      title: const Text(
                        'Políticas de Privacidad',
                        style: TextStyle(color: Color(0xff292929)),
                      ),
                      onTap: () {
                        // Acciones de la ruta
                        Navigator.of(context).pushNamed('/privacy');
                      },
                    ),
                    SizedBox(
                      height: 250,
                    ),
                    Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 30),
                      child: TextButton(
                        onPressed: () {
                          // Acción del botón
                        },
                        style: ButtonStyle(
                          backgroundColor: MaterialStateProperty.all<Color>(
                              const Color(0xff292929)), // Color de fondo
                          shape:
                              MaterialStateProperty.all<RoundedRectangleBorder>(
                            RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(
                                  200.0), // Radio de los bordes
                            ),
                          ),
                        ),
                        child: const Text(
                          'Iniciar Sesión',
                          style: TextStyle(color: Colors.white),
                        ),
                      ),
                    ),
                  ],
                ),
              )
            : null,
        body: SingleChildScrollView(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              // Texto y logo en la mitad de la página
              Container(
                color: const Color(0xffF09D99),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceAround,
                  children: [
                    const SizedBox(height: 20.0, width: 50.0),
                    Expanded(
                      child: Padding(
                        padding: const EdgeInsets.symmetric(horizontal: 20.0),
                        child: Text(
                          'Obten respuestas inmediatas a tus dudas de de educacion financiera',
                          textAlign: TextAlign.start,
                          style: TextStyle(
                              fontSize: MediaQuery.of(context).size.width > 1000
                                  ? 64.0
                                  : MediaQuery.of(context).size.width > 500
                                      ? 48.0
                                      : 24.0,
                              fontWeight: FontWeight.bold,
                              color: Colors.white),
                        ),
                      ),
                    ),
                    Expanded(
                      child: Padding(
                        padding: const EdgeInsets.symmetric(horizontal: 20.0),
                        child: MediaQuery.of(context).size.width > 600
                            ? Image.asset('assets/logojpg.png',
                                width: 400, height: 400)
                            : Column(
                                children: [
                                  const SizedBox(height: 20),
                                  Image.asset('assets/logojpg.png',
                                      width: 200, height: 200),
                                ],
                              ),
                      ),
                    ),
                    const SizedBox(height: 20.0),
                  ],
                ),
              ),
              Container(
                color: const Color(0xffF09D99),
                // Botones en la parte inferior
                child: Padding(
                  padding: const EdgeInsets.symmetric(
                      horizontal: 70.0, vertical: 20.0),
                  child: MediaQuery.of(context).size.width < 880
                      ? Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            ElevatedButton(
                              onPressed: () {
                                // Acción del botón
                              },
                              style: ButtonStyle(
                                backgroundColor:
                                    MaterialStateProperty.all<Color>(
                                        const Color(0xff292929)),
                              ),
                              child: const Text('Regístrate',
                                  style: TextStyle(color: Colors.white)),
                            ),
                            const SizedBox(height: 10.0),
                            OutlinedButton(
                              onPressed: () {
                                // Acción del botón
                              },
                              child: const Text('Ingresar como invitado',
                                  style: TextStyle(color: Color(0xff292929))),
                            ),
                            const SizedBox(height: 20.0),
                          ],
                        )
                      : Row(
                          mainAxisAlignment: MainAxisAlignment.start,
                          children: [
                            ElevatedButton(
                              onPressed: () {
                                // Acción del botón
                              },
                              style: ButtonStyle(
                                backgroundColor:
                                    MaterialStateProperty.all<Color>(
                                        const Color(0xff292929)),
                              ),
                              child: const Text('Regístrate',
                                  style: TextStyle(color: Colors.white)),
                            ),
                            const SizedBox(width: 10),
                            OutlinedButton(
                              onPressed: () {
                                // Acción del botón
                              },
                              child: const Text('Ingresar como invitado',
                                  style: TextStyle(color: Color(0xff292929))),
                            ),
                            const SizedBox(height: 20.0),
                          ],
                        ),
                ),
              ),
              // Curva de fondo
              Stack(
                children: [
                  Container(
                    height: 15.0,
                    decoration: const BoxDecoration(
                      color: Color(0xffF09D99),
                      borderRadius: BorderRadius.only(
                        bottomLeft: Radius.circular(2000.0),
                        bottomRight: Radius.circular(2000.0),
                      ),
                    ),
                  ),
                  /* Positioned(
                bottom: 0,
                left: MediaQuery.of(context).size.width / 2 - 50,
                child: const 
                ),
              ), */
                ],
              ),
              const SizedBox(height: 20.0),

              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 70.0),
                child: Text(
                  'Qué es Cuentame + ?',
                  style: TextStyle(
                      fontSize: MediaQuery.of(context).size.width > 1000
                          ? 48.0
                          : 30.0,
                      fontWeight: FontWeight.bold,
                      color: const Color(0xff292929)),
                ),
              ),
              const SizedBox(height: 20.0),
              // Columnas de iconos y textos
              MediaQuery.of(context).size.width > 880
                  ? Row(
                      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                      children: [
                        Expanded(
                          child: Column(
                            children: const [
                              Icon(
                                Icons.savings_outlined,
                                color: Color(0xff7EC9E0),
                                size: 50.0,
                              ),
                              SizedBox(height: 10.0),
                              Padding(
                                padding:
                                    EdgeInsets.only(left: 70.0, right: 50.0),
                                child: Text(
                                  'Cuentame + es  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat erat ut finibus tincidunt. Duis vel convallis ex, maximus tempus augue. Etiam imperdiet mattis est, eu scelerisque orci tempor rutrum. 1',
                                  softWrap: true,
                                ),
                              ),
                            ],
                          ),
                        ),
                        Expanded(
                          child: Column(
                            children: const [
                              Icon(
                                Icons.account_balance_outlined,
                                color: Color(0xff7EC9E0),
                                size: 50.0,
                              ),
                              SizedBox(height: 10.0),
                              Padding(
                                padding:
                                    EdgeInsets.only(left: 50.0, right: 70.0),
                                child: Text(
                                  'Cuentame + es  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat erat ut finibus tincidunt. Duis vel convallis ex, maximus tempus augue. Etiam imperdiet mattis est, eu scelerisque orci tempor rutrum. 2',
                                  softWrap: true,
                                ),
                              ),
                            ],
                          ),
                        ),
                      ],
                    )
                  : Column(
                      children: [
                        Column(
                          children: const [
                            Icon(
                              Icons.savings_outlined,
                              color: Color(0xff7EC9E0),
                              size: 50.0,
                            ),
                            Padding(
                                padding: EdgeInsets.symmetric(
                                    horizontal: 30, vertical: 10),
                                child: Text(
                                    'Cuentame + es  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat erat ut finibus tincidunt. Duis vel convallis ex, maximus tempus augue. Etiam imperdiet mattis est, eu scelerisque orci tempor rutrum.'))
                          ],
                        ),
                        const SizedBox(height: 20.0),
                        Column(
                          children: const [
                            Icon(
                              Icons.account_balance_outlined,
                              color: Color(0xff7EC9E0),
                              size: 50.0,
                            ),
                            Padding(
                                padding: EdgeInsets.symmetric(
                                    horizontal: 30, vertical: 10),
                                child: Text(
                                    'Cuentame + es  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat erat ut finibus tincidunt. Duis vel convallis ex, maximus tempus augue. Etiam imperdiet mattis est, eu scelerisque orci tempor rutrum.'))
                          ],
                        ),
                      ],
                    ),
              const SizedBox(height: 50.0),
              Container(
                height: 50.0,
                color: const Color(0xffF09D99),
              )
            ],
          ),
        ));
  }
}
