import 'package:flutter/material.dart';

class ChatsGuestScreens extends StatelessWidget {
  const ChatsGuestScreens({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: const Color(0xFFFCBCB8),
        titleSpacing: 0,
        centerTitle: true,
        title: Row(
          mainAxisAlignment: MainAxisAlignment.start,
          crossAxisAlignment: CrossAxisAlignment.center,
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
              style: TextStyle(
                color: Colors.white,
                fontSize: 20,
                fontWeight: FontWeight.bold,
              ),
            ),
            const Padding(padding: EdgeInsets.symmetric(horizontal: 20)),
            if (MediaQuery.of(context).size.width > 950)
              Row(
                mainAxisAlignment: MainAxisAlignment.start,
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  TextButton(
                    onPressed: () {
                      Navigator.of(context).pushNamed('/faq');
                    },
                    child: const Text(
                      "Preguntas Frecuentes",
                      style: TextStyle(
                        fontWeight: FontWeight.bold,
                        color: Color(0xff292929),
                      ),
                    ),
                  ),
                  const SizedBox(width: 20),
                  TextButton(
                    onPressed: () {
                      Navigator.of(context).pushNamed('/tos');
                    },
                    child: const Text(
                      "Términos y Condiciones",
                      style: TextStyle(
                        fontWeight: FontWeight.bold,
                        color: Color(0xff292929),
                      ),
                    ),
                  ),
                  const SizedBox(width: 20),
                  TextButton(
                    onPressed: () {
                      Navigator.of(context).pushNamed('/privacy');
                    },
                    child: const Text(
                      "Políticas de Privacidad",
                      style: TextStyle(
                        fontWeight: FontWeight.bold,
                        color: Color(0xff292929),
                      ),
                    ),
                  ),
                ],
              ),
          ],
        ),
        actions: [
          // Botón de iniciar sesión solo en escritorio
          if (MediaQuery.of(context).size.width > 880)
            Padding(
              padding: const EdgeInsets.only(
                right: 16.0,
                top: 10.0,
                bottom: 10.0,
                left: 20.0,
              ),
              child: TextButton(
                onPressed: () {
                  // Acción del botón
                  Navigator.of(context).pushNamed('/login');
                },
                style: ButtonStyle(
                  backgroundColor: MaterialStateProperty.all<Color>(
                    const Color(0xff292929),
                  ), // Color de fondo
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
      drawer: MediaQuery.of(context).size.width < 880
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
                    tileColor: const Color.fromARGB(255, 219, 135, 131),
                    leading:
                        const Icon(Icons.home_rounded, color: Colors.white),
                    title: const Text(
                      'Menú Principal',
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
      body: LayoutBuilder(
        builder: (BuildContext context, BoxConstraints constraints) {
          if (constraints.maxWidth > 800) {
            return Row(
              children: [
                Expanded(
                  child: Padding(
                    padding: const EdgeInsets.all(16.0),
                    child: Column(
                      children: [
                        Expanded(
                          child: Card(
                            elevation: 0,
                            borderOnForeground: true,
                            child: Padding(
                              padding: const EdgeInsets.all(16.0),
                              child: Column(
                                mainAxisAlignment:
                                    MainAxisAlignment.spaceBetween,
                                children: [
                                  const SizedBox(height: 200),
                                  Image.asset('assets/logovariant.png',
                                      width: 200, height: 200),
                                  Row(
                                    mainAxisAlignment: MainAxisAlignment.center,
                                    children: const [
                                      Text(
                                        'Preguntas + Preguntadas',
                                        style: TextStyle(
                                            fontWeight: FontWeight.bold,
                                            color: Color(0xff7EC9E0),
                                            fontSize: 36),
                                      ),
                                    ],
                                  ),
                                  const SizedBox(height: 16),
                                  Expanded(
                                    child: LayoutBuilder(
                                      builder: (context, constraints) {
                                        return Wrap(
                                          crossAxisAlignment:
                                              WrapCrossAlignment.end,
                                          direction: constraints.maxWidth > 800
                                              ? Axis.horizontal
                                              : Axis.vertical,
                                          spacing: 8.0,
                                          runSpacing: 8.0,
                                          children: [
                                            _buildQuestionCard(
                                                '¿Cómo empezar a invertir?'),
                                            _buildQuestionCard(
                                                '¿Qué es la E-Firma?'),
                                            _buildQuestionCard(
                                                '¿Cómo funciona el crédito?'),
                                            _buildQuestionCard(
                                                '¿Qué es el Afore?'),
                                          ],
                                        );
                                      },
                                    ),
                                  ),
                                  const SizedBox(height: 16),
                                ],
                              ),
                            ),
                          ),
                        ),
                        const SizedBox(height: 16),
                        Row(
                          children: [
                            const Expanded(
                              child: TextField(
                                decoration: InputDecoration(
                                  enabledBorder: OutlineInputBorder(
                                    borderSide:
                                        BorderSide(color: Color(0xff7EC9E0)),
                                  ),
                                  focusedBorder: OutlineInputBorder(
                                    borderSide:
                                        BorderSide(color: Color(0xff7EC9E0)),
                                  ),
                                  hintText: 'Escribe un mensaje',
                                  prefixIcon: Icon(Icons.edit_rounded,
                                      color: Color(0xff7EC9E0)),
                                  suffixIcon: Icon(Icons.mic_rounded,
                                      color: Color(0xFF616161)),
                                ),
                              ),
                            ),
                            IconButton(
                              onPressed: () {},
                              icon: const Icon(Icons.send_rounded),
                              color: const Color(0xff7EC9E0),
                            )
                          ],
                        ),
                      ],
                    ),
                  ),
                ),
              ],
            );
          } else {
            return Padding(
              padding: const EdgeInsets.all(16.0),
              child: Column(
                children: [
                  Expanded(
                    child: Card(
                      elevation: 0,
                      borderOnForeground: true,
                      child: Padding(
                        padding: const EdgeInsets.all(16.0),
                        child: Column(
                          children: [
                            const SizedBox(height: 50),
                            Image.asset('assets/logovariant.png',
                                width: 100, height: 100),
                            const SizedBox(width: 20),
                            Row(
                              mainAxisAlignment: MainAxisAlignment.center,
                              children: [
                                const Text(
                                  'Preguntas + Preguntadas',
                                  style: const TextStyle(
                                      fontWeight: FontWeight.bold,
                                      color: Color(0xff7EC9E0),
                                      fontSize: 24),
                                ),
                              ],
                            ),
                            const SizedBox(height: 16),
                            Expanded(
                              child: LayoutBuilder(
                                builder: (context, constraints) {
                                  return Wrap(
                                    crossAxisAlignment: WrapCrossAlignment.end,
                                    direction: constraints.maxWidth > 800
                                        ? Axis.horizontal
                                        : Axis.vertical,
                                    spacing: 16.0,
                                    runSpacing: 8.0,
                                    children: [
                                      _buildQuestionCard(
                                          '¿Cómo empezar a invertir?'),
                                      _buildQuestionCard('¿Qué es la E-Firma?'),
                                      _buildQuestionCard(
                                          '¿Cómo funciona el crédito?'),
                                      _buildQuestionCard('¿Qué es el Afore?'),
                                    ],
                                  );
                                },
                              ),
                            ),
                          ],
                        ),
                      ),
                    ),
                  ),
                  const SizedBox(height: 16),
                  Row(
                    children: [
                      const Expanded(
                        child: TextField(
                          // TODO: cambiar color del cosito de texto
                          decoration: InputDecoration(
                            enabledBorder: OutlineInputBorder(
                              borderSide: BorderSide(color: Color(0xff7EC9E0)),
                            ),
                            focusedBorder: OutlineInputBorder(
                              borderSide: BorderSide(color: Color(0xff7EC9E0)),
                            ),
                            hintText: 'Escribe un mensaje',
                            prefixIcon: Icon(Icons.edit_rounded,
                                color: Color(0xff7EC9E0)),
                            suffixIcon: Icon(Icons.mic_rounded,
                                color: Color(0xFF616161)),
                          ),
                        ),
                      ),
                      IconButton(
                        onPressed: () {},
                        icon: const Icon(Icons.send_rounded),
                        color: const Color(0xff7EC9E0),
                      )
                    ],
                  )
                ],
              ),
            );
          }
        },
      ),
    );
  }

  Widget _buildQuestionCard(String question) {
    return SizedBox(
      width: 200,
      child: Container(
        decoration: BoxDecoration(
          border: Border.all(color: const Color(0xff7EC9E0)),
          borderRadius: BorderRadius.circular(8.0),
        ),
        padding: const EdgeInsets.all(8.0),
        child: Text(question),
      ),
    );
  }
}
