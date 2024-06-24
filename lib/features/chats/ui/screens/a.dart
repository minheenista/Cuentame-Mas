/* import 'package:flutter/material.dart';

class ChatsScreens extends StatelessWidget {
  const ChatsScreens({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: MediaQuery.of(context).size.width < 800
          ? AppBar(
              leading: Builder(
                builder: (BuildContext context) {
                  return IconButton(
                    icon: const Icon(Icons.menu),
                    onPressed: () {
                      Scaffold.of(context).openDrawer();
                    },
                  );
                },
              ),
            )
          : null,
      drawer: Drawer(
        backgroundColor: const Color(0xFFFCBCB8),
        child: ListView(
          padding: const EdgeInsets.only(left: 20, right: 20),
          children: [
            Padding(
              padding: const EdgeInsets.symmetric(vertical: 10),
              child: Row(
                children: [
                  Image.asset('assets/logojpg.png', width: 50, height: 50),
                  const SizedBox(width: 20),
                  const Text(
                    "Cuéntame + ",
                    style: TextStyle(
                        fontSize: 32,
                        color: Colors.white,
                        fontWeight: FontWeight.bold),
                  ),
                ],
              ),
            ),
            const Divider(color: Color.fromARGB(120, 179, 179, 179)),
            TextButton.icon(
              style: const ButtonStyle(
                alignment: Alignment.centerLeft,
              ),
              onPressed: () {},
              icon: const Icon(
                Icons.add_rounded,
                color: Colors.black,
              ),
              label: const Text(
                "Nueva conversación",
                style: TextStyle(
                  color: Colors.black,
                ),
              ),
            ),
            const Divider(color: Color.fromARGB(120, 179, 179, 179)),
            const Text(
              "Conversaciones",
              style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16),
            ),
            ListTile(
              title: const Text('¿Qué es el rfc?'),
              trailing: PopupMenuButton(
                icon: const Icon(Icons.more_horiz_rounded, color: Colors.black),
                itemBuilder: (context) => [
                  const PopupMenuItem(
                    child: Text('Eliminar'),
                  ),
                  const PopupMenuItem(
                    child: Text('Editar'),
                  ),
                ],
              ),
              onTap: () {
                Navigator.pushNamed(context, '/status');
              },
            ),
            ListTile(
              title: const Text('¿Qué es situación fiscal?'),
              trailing: PopupMenuButton(
                icon: const Icon(Icons.more_horiz_rounded, color: Colors.black),
                itemBuilder: (context) => [
                  const PopupMenuItem(
                    child: Text('Eliminar'),
                  ),
                  const PopupMenuItem(
                    child: Text('Editar'),
                  ),
                ],
              ),
              onTap: () {
                Navigator.pushNamed(context, '/status');
              },
            ),
            ListTile(
              title: const Text('¿Cómo funciona el crédito?'),
              trailing: PopupMenuButton(
                icon: const Icon(Icons.more_horiz_rounded, color: Colors.black),
                itemBuilder: (context) => [
                  const PopupMenuItem(
                    child: Text('Eliminar'),
                  ),
                  const PopupMenuItem(
                    child: Text('Editar'),
                  ),
                ],
              ),
              onTap: () {
                Navigator.pushNamed(context, '/status');
              },
            ),
            ListTile(
              title: const Text('¿Para qué sirve la firma electronica'),
              trailing: PopupMenuButton(
                icon: const Icon(Icons.more_horiz_rounded, color: Colors.black),
                itemBuilder: (context) => [
                  const PopupMenuItem(
                    child: Text('Eliminar'),
                  ),
                  const PopupMenuItem(
                    child: Text('Editar'),
                  ),
                ],
              ),
              onTap: () {
                Navigator.pushNamed(context, '/status');
              },
            ),
          ],
        ),
      ),
      body: LayoutBuilder(
        builder: (BuildContext context, BoxConstraints constraints) {
          if (constraints.maxWidth > 800) {
            return Row(
              children: [
                Container(
                  width: 300,
                  color: const Color(0xFFFCBCB8),
                  child: ListView(
                    padding: const EdgeInsets.only(left: 20, right: 20),
                    children: [
                      Padding(
                        padding: const EdgeInsets.symmetric(vertical: 10),
                        child: Row(
                          children: [
                            Image.asset('assets/logojpg.png',
                                width: 50, height: 50),
                            const SizedBox(width: 20),
                            const Text(
                              "Cuéntame + ",
                              style: TextStyle(
                                  fontSize: 32,
                                  color: Colors.white,
                                  fontWeight: FontWeight.bold),
                            ),
                          ],
                        ),
                      ),
                      const Divider(color: Color.fromARGB(120, 179, 179, 179)),
                      TextButton.icon(
                        style: const ButtonStyle(
                          alignment: Alignment.centerLeft,
                        ),
                        onPressed: () {},
                        icon: const Icon(
                          Icons.add_rounded,
                          color: Colors.black,
                        ),
                        label: const Text(
                          "Nueva conversación",
                          style: TextStyle(
                            color: Colors.black,
                          ),
                        ),
                      ),
                      const Divider(color: Color.fromARGB(120, 179, 179, 179)),
                      const Text(
                        "Conversaciones",
                        style: TextStyle(
                            fontWeight: FontWeight.bold, fontSize: 16),
                      ),
                      ListTile(
                        title: const Text('¿Qué es el rfc?'),
                        trailing: PopupMenuButton(
                          icon: const Icon(Icons.more_horiz_rounded,
                              color: Colors.black),
                          itemBuilder: (context) => [
                            const PopupMenuItem(
                              child: Text('Eliminar'),
                            ),
                            const PopupMenuItem(
                              child: Text('Editar'),
                            ),
                          ],
                        ),
                        onTap: () {
                          Navigator.pushNamed(context, '/status');
                        },
                      ),
                      ListTile(
                        title: const Text('¿Qué es situación fiscal?'),
                        trailing: PopupMenuButton(
                          icon: const Icon(Icons.more_horiz_rounded,
                              color: Colors.black),
                          itemBuilder: (context) => [
                            const PopupMenuItem(
                              child: Text('Eliminar'),
                            ),
                            const PopupMenuItem(
                              child: Text('Editar'),
                            ),
                          ],
                        ),
                        onTap: () {
                          Navigator.pushNamed(context, '/status');
                        },
                      ),
                      ListTile(
                        title: const Text('¿Cómo funciona el crédito?'),
                        trailing: PopupMenuButton(
                          icon: const Icon(Icons.more_horiz_rounded,
                              color: Colors.black),
                          itemBuilder: (context) => [
                            const PopupMenuItem(
                              child: Text('Eliminar'),
                            ),
                            const PopupMenuItem(
                              child: Text('Editar'),
                            ),
                          ],
                        ),
                        onTap: () {
                          Navigator.pushNamed(context, '/status');
                        },
                      ),
                      ListTile(
                        title:
                            const Text('¿Para qué sirve la firma electronica'),
                        trailing: PopupMenuButton(
                          icon: const Icon(Icons.more_horiz_rounded,
                              color: Colors.black),
                          itemBuilder: (context) => [
                            const PopupMenuItem(
                              child: Text('Eliminar'),
                            ),
                            const PopupMenuItem(
                              child: Text('Editar'),
                            ),
                          ],
                        ),
                        onTap: () {
                          Navigator.pushNamed(context, '/status');
                        },
                      ),
                    ],
                  ),
                ),
                Expanded(
                  child: Padding(
                    padding: const EdgeInsets.all(16.0),
                    child: Column(
                      children: [
                        Expanded(
                          child: Card(
                            elevation: 1,
                            borderOnForeground: true,
                            child: Padding(
                              padding: const EdgeInsets.all(16.0),
                              child: Column(
                                mainAxisAlignment: MainAxisAlignment.end,
                                children: [
                                  SizedBox(height: 200),
                                  Image.asset('assets/logovariant.png',
                                      width: 50, height: 50),
                                  Row(
                                    mainAxisAlignment: MainAxisAlignment.center,
                                    children: const [
                                      Text(
                                        'Preguntas + Preguntadas',
                                        style: TextStyle(
                                            fontWeight: FontWeight.bold,
                                            color: Color(0xff7EC9E0),
                                            fontSize: 20),
                                      ),
                                    ],
                                  ),
                                  const SizedBox(height: 16),
                                  Expanded(
                                    child: LayoutBuilder(
                                      builder: (context, constraints) {
                                        return Wrap(
                                          crossAxisAlignment:
                                              WrapCrossAlignment.center,
                                          direction: constraints.maxWidth > 800
                                              ? Axis.horizontal
                                              : Axis.vertical,
                                          spacing: 8.0,
                                          runSpacing: 8.0,
                                          children: [
                                            _buildQuestionCard(
                                                '¿Qué es el rfc?'),
                                            _buildQuestionCard(
                                                '¿Qué es situación fiscal?'),
                                            _buildQuestionCard(
                                                '¿Cómo funciona el crédito?'),
                                            _buildQuestionCard(
                                                '¿Para qué sirve la firma electronica?'),
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
                        TextField(
                          decoration: const InputDecoration(
                            hintText: 'Escribe un mensaje',
                            suffixIcon: Icon(Icons.send),
                          ),
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
                      elevation: 1,
                      borderOnForeground: true,
                      child: Padding(
                        padding: const EdgeInsets.all(16.0),
                        child: Column(
                          children: [
                            SizedBox(height: 200),
                            Image.asset('assets/logovariant.png',
                                width: 50, height: 50),
                            const SizedBox(width: 20),
                            Row(
                              mainAxisAlignment: MainAxisAlignment.center,
                              children: [
                                Text(
                                  'Preguntas + Preguntadas',
                                  style: TextStyle(
                                      fontWeight: FontWeight.bold,
                                      color: Color(0xff7EC9E0),
                                      fontSize: 20),
                                ),
                              ],
                            ),
                            const SizedBox(height: 16),
                            Expanded(
                              child: LayoutBuilder(
                                builder: (context, constraints) {
                                  return Wrap(
                                    crossAxisAlignment:
                                        WrapCrossAlignment.center,
                                    direction: constraints.maxWidth > 800
                                        ? Axis.horizontal
                                        : Axis.vertical,
                                    spacing: 8.0,
                                    runSpacing: 8.0,
                                    children: [
                                      _buildQuestionCard('¿Qué es el rfc?'),
                                      _buildQuestionCard(
                                          '¿Qué es situación fiscal?'),
                                      _buildQuestionCard(
                                          '¿Cómo funciona el crédito?'),
                                      _buildQuestionCard(
                                          '¿Para qué sirve la firma electronica?'),
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
                  TextField(
                    decoration: const InputDecoration(
                      hintText: 'Escribe un mensaje',
                      suffixIcon: Icon(Icons.send),
                    ),
                  ),
                ],
              ),
            );
          }
        },
      ),
    );
  }

  Widget _buildQuestionCard(String question) {
    return Container(
      decoration: BoxDecoration(
        border: Border.all(color: Color(0xff7EC9E0)),
        borderRadius: BorderRadius.circular(8.0),
      ),
      padding: const EdgeInsets.all(8.0),
      child: Text(question),
    );
  }
}
 */