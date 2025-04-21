import 'package:flutter/material.dart';
import 'package:photo_view/photo_view.dart';
import 'package:photo_view/photo_view_gallery.dart';

enum NavigationDirection { left, right }

class ImagePage extends StatefulWidget {
  final int initialIndex;
  final List<ImageProvider> imageProviders;

  ImagePage({required this.initialIndex, required this.imageProviders});

  @override
  _ImagePageState createState() => _ImagePageState();
}

class _ImagePageState extends State<ImagePage> {
  late PageController _pageController;
  int _currentIndex = 0;

  @override
  void initState() {
    super.initState();
    _currentIndex = widget.initialIndex;
    _pageController = PageController(initialPage: _currentIndex);
  }

  void navigate(NavigationDirection direction) {
    if (direction == NavigationDirection.left && _currentIndex > 0) {
      _pageController.animateToPage(
        _currentIndex - 1,
        duration: Duration(milliseconds: 300),
        curve: Curves.easeInOut,
      );
    } else if (direction == NavigationDirection.right &&
        _currentIndex < widget.imageProviders.length - 1) {
      _pageController.animateToPage(
        _currentIndex + 1,
        duration: Duration(milliseconds: 300),
        curve: Curves.easeInOut,
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          PhotoViewGallery.builder(
            itemCount: widget.imageProviders.length,
            builder: (context, index) {
              return PhotoViewGalleryPageOptions(
                imageProvider: widget.imageProviders[index],
                minScale: PhotoViewComputedScale.contained * 0.8,
                maxScale: PhotoViewComputedScale.covered * 2,
              );
            },
            backgroundDecoration: BoxDecoration(
              color: Colors.black,
            ),
            pageController: _pageController,
            enableRotation: false,
            onPageChanged: (index) {
              setState(() {
                _currentIndex = index;
              });
            },
            scrollDirection: Axis.horizontal,
          ),
          Positioned(
            top: MediaQuery.of(context).size.height / 2,
            left: 0,
            right: 0,
            child: Padding(
              padding: const EdgeInsets.all(16.0),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  NavigationButton(
                    direction: NavigationDirection.left,
                    onPressed: () => navigate(NavigationDirection.left),
                    ifEnd: _currentIndex == 0
                  ),
                  NavigationButton(
                    direction: NavigationDirection.right,
                    onPressed: () => navigate(NavigationDirection.right),
                    ifEnd: _currentIndex == widget.imageProviders.length - 1,
                  ),
                ],
              ),
            ),
          ),
          Positioned(
            top: 0,
            right: 0,
            child: Padding(
              padding: const EdgeInsets.all(16.0),
              child: IconButton(
                icon: Icon(Icons.close),
                color: Colors.white,
                onPressed: () {
                  Navigator.of(context).pop();
                },
              ),
            ),
          ),
        ],
      ),
    );
  }
}

class NavigationButton extends StatelessWidget {
  final NavigationDirection direction;
  final VoidCallback onPressed;
  final bool ifEnd;

  NavigationButton({required this.direction, required this.onPressed, required this.ifEnd});

  @override
  Widget build(BuildContext context) {
    return Material(
      color: Colors.transparent,
      child: InkWell(
        borderRadius: BorderRadius.circular(30.0),
        onTap: ifEnd ? null : onPressed,
        child: Container(
          padding: EdgeInsets.all(8.0),
          decoration: BoxDecoration(
            shape: BoxShape.circle,
            color: ifEnd ? Colors.grey : Color.fromRGBO(41, 82, 56, 100),
          ),
          child: Align(
            alignment: Alignment.center, // 아이콘을 정확한 가운데에 위치시킵니다.
            child: Icon(
              direction == NavigationDirection.left
                  ? Icons.arrow_back_ios
                  : Icons.arrow_forward_ios,
              color: Colors.white,
            ),
          ),
        ),
      ),
    );
  }
}
