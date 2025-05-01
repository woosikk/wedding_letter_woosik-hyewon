import 'package:flutter/material.dart';
import 'package:auto_size_text/auto_size_text.dart';
import 'dart:ui';
import 'package:photo_view/photo_view.dart';
import 'package:photo_view/photo_view_gallery.dart';
import 'package:mochung/widgets/imagePage.dart';

class Gallery extends StatefulWidget {
  final List<ImageProvider> imagePaths = [
    AssetImage('assets/images/1.jpg'),
    AssetImage('assets/images/2.jpg'),
    AssetImage('assets/images/3.jpg'),
    AssetImage('assets/images/4.jpg'),
    AssetImage('assets/images/5.jpg'),
    AssetImage('assets/images/6.jpg'),
    AssetImage('assets/images/7.jpg'),
    AssetImage('assets/images/8.jpg'),
    AssetImage('assets/images/9.jpg'),
    AssetImage('assets/images/10.jpg'),
    AssetImage('assets/images/11.jpg'),
    AssetImage('assets/images/12.jpg'),
    AssetImage('assets/images/13.jpg'),
    AssetImage('assets/images/14.jpg'),
    AssetImage('assets/images/15.jpg'),
    AssetImage('assets/images/16.jpg'),
    AssetImage('assets/images/17.jpg'),
    AssetImage('assets/images/18.jpg'),
    AssetImage('assets/images/19.jpg'),
    AssetImage('assets/images/20.jpg'),
    AssetImage('assets/images/21.jpeg'),
    AssetImage('assets/images/22.jpeg'),
    AssetImage('assets/images/23.jpeg'),
    AssetImage('assets/images/24.jpeg'),
    AssetImage('assets/images/25.jpeg'),
    AssetImage('assets/images/26.jpeg'),
    AssetImage('assets/images/27.jpeg'),
    AssetImage('assets/images/28.jpeg'),
    AssetImage('assets/images/29.jpeg'),
    AssetImage('assets/images/30.jpeg'),
    AssetImage('assets/images/31.jpeg'),
    AssetImage('assets/images/32.jpeg'),
    AssetImage('assets/images/33.jpeg'),
  ];
  
  @override
  _GalleryState createState() => _GalleryState();
}

class _GalleryState extends State<Gallery> {
  PageController _pageController = PageController(viewportFraction: 0.9);
  int _currentPage = 0;

  @override
  void initState() {
    super.initState();
    _pageController.addListener(() {
      setState(() {
        _currentPage = _pageController.page?.round() ?? 0;
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 500.0,
      margin: const EdgeInsetsDirectional.all(20.0),
      child: GridView.builder(
        shrinkWrap: true,
        physics: NeverScrollableScrollPhysics(),
        scrollDirection: Axis.vertical,
        gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
          crossAxisCount: 3, // 한 행에 표시할 썸네일 수
        ),
        itemCount: widget.imagePaths.length,
        itemBuilder: (context, index) {
          return GestureDetector(
            onTap: () {
              Navigator.push(
                context,
                PageRouteBuilder(
                  pageBuilder: (context, animation, secondaryAnimation) => ImagePage(
                    initialIndex: index,
                    imageProviders: widget.imagePaths,
                  ),
                ),
              );
            },
            child: Container(
              margin: EdgeInsets.all(4.0),
              child: Image(
                image: widget.imagePaths[index],
                fit: BoxFit.cover,
              ),
            ),
          );
        },
      ),
    );
  }
  
  @override
  void dispose() {
    _pageController.dispose();
    super.dispose();
  }
}
