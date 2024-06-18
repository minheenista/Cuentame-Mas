import 'package:flutter/material.dart';

class PrivacyScreen extends StatelessWidget {
  const PrivacyScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return const _PrivacyScreen();
  }
}

class _PrivacyScreen extends StatelessWidget {
  const _PrivacyScreen({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
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
              'Cuéntame +',
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
                        "Términos y Condiciones",
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
                        "Políticas de Privacidad",
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
                  Navigator.of(context).pushNamed('/login');
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
      endDrawer: MediaQuery.of(context).size.width < 940
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
                            'Cuéntame +',
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
                    leading: const Icon(Icons.home_rounded,
                        color: Color(0xff292929)),
                    title: const Text(
                      'Menú Principal',
                      style: TextStyle(color: Color(0xff292929)),
                    ),
                    onTap: () {
                      // Acciones de la ruta
                      Navigator.of(context).pushNamed('/home');
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
                    tileColor: const Color.fromARGB(255, 219, 135, 131),
                    leading: const Icon(Icons.privacy_tip_rounded,
                        color: Colors.white),
                    title: const Text(
                      'Políticas de Privacidad',
                      style: TextStyle(color: Colors.white),
                    ),
                    onTap: () {
                      // Acciones de la ruta
                      Navigator.of(context).pushNamed('/privacy');
                    },
                  ),
                  const SizedBox(
                    height: 250,
                  ),
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 30),
                    child: TextButton(
                      onPressed: () {
                        // Acción del botón
                        Navigator.of(context).pushNamed('/login');
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
        children: [
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 40),
            child: Column(
              children: [
                const SizedBox(height: 20),
                const Text(
                  "Políticas de Privacidad",
                  style: TextStyle(fontSize: 30, fontWeight: FontWeight.bold),
                ),
                /* SizedBox(height: 20),
                Text(
                  "Última actualización: 1 de enero de 2022",
                  style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
                  textAlign: TextAlign.left,
                ), */
                const SizedBox(height: 20),
                const Text(
                  "Última actualización: 11 de febrero de 2024.",
                  style: TextStyle(fontWeight: FontWeight.bold),
                ),
                const SizedBox(height: 20),
                const Text(
                    "Este Aviso de Privacidad fue redactado conforme los principios de licitud, consentimiento, información, calidad, finalidad, lealtad, proporcionalidad y responsabilidad establecidos en la Ley Federal de Protección de Datos Personales en Posesión de Particulares (LFPDPPP) publicada en el Diario Oficial de la Federación el 05-07-2010 y las Leyes aplicables dentro de la jurisdicción correspondiente."),
                const SizedBox(height: 20),
                Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: const [
                    Text(
                      "RESUMEN DE LA POLITICA DE PRIVACIDAD",
                      style: TextStyle(
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 20),
                const Text(
                  "Datos Personales tratados para las siguientes finalidades y utilizando los siguientes servicios:",
                  style: TextStyle(fontWeight: FontWeight.bold),
                ),
                const SizedBox(height: 20),
                const Text(
                    "Contactar con el Usuario  Formulario de contacto: Datos Personales: nombre; apellido(s); dirección de correo electrónico. Permisos sobre dispositivos para acceder a Datos Personales Permisos sobre dispositivos para acceder a Datos Personales Datos Personales: Permiso de ubicación aproximada (en modo no continuo); Permiso para acceder a la ubicación exacta (en modo no continuo); Permiso para la cámara; Permiso para la Galería de Fotos Registro y autenticación Firebase Authentication Datos Personales: nombre; apellido(s); username; cuentas en redes sociales; foto de perfil; dirección de correo electrónico. Facebook Oauth Datos Personales: distintas clases de Datos; Rastreador Twitter OAuth y Google OAuth Datos Personales: distintas clases de Datos, según se especifica en la Política de Privacidad del servicio"),
                const SizedBox(height: 20),
              ],
            ),
          ),
          const SizedBox(height: 20),
          Container(
            height: 50.0,
            color: const Color(0xffF09D99),
          )
        ],
      )),
    );
  }
}
