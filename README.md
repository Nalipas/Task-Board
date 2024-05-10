<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Nalipas/Task-Board">
    <img src="https://cdn3.emoji.gg/emojis/2242-peepo-learning.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Task Board</h3>

  <p align="center">
    A simple Kanban board for task management!
    <br />
    <a href="https://github.com/Nalipas/Task-Board"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/Nalipas/Task-Board">View Demo</a>
    ·
    <a href="https://github.com/Nalipas/Task-Board/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/Nalipas/Task-Board/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Task Board Screenshot][product-screenshot]](https://nalipas.github.io/Task-Board/)

Here you can find the source code used to deploy a simple Task Board web application. The application allows a user to place tasks on a Kanban Board by filling out a form modal. Tasks cards are displayed in the 'To-do' lane and can be dragged over to other lanes as necessary. If a task is due today, it will show as 'yellow', and if it is past due, it will show as 'red'. Tasks will remain in their lanes through page refreshes, and can be deleted by the user by using the button on the card.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]
* [![JQuery][JQuery.com]][JQuery-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started
### Prerequisites

This website was built and tested using Chromium based browsers <a href="https://www.opera.com/gx">Opera GX</a> and <a href="(https://www.google.com/chrome/">Google Chrome</a> on a <a href="https://www.microsoft.com/en-us/software-download/windows10%20">Windows 10</a> machine, but should be viewable on any HTML supported browser.

This website was built using <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_nesting/Using_CSS_nesting">CSS nesting</a>, a relatively new feature. If you have issues viewing this webpage on your browser, please <a href="mailto:smoreno2014@gmail.com">contact me</a>.

### Installation

There are no install directions here.

You can find the published website hosted at 
<a href="https://nalipas.github.io/Task-Board/">https://nalipas.github.io/Task-Board/</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

[![Task Board Screenshot][product-gif]](https://nalipas.github.io/Task-Board/)

When visiting the application hosted at <a href="https://nalipas.github.io/Task-Board/">https://nalipas.github.io/Task-Board/</a> you will be presented with a blank Kanban board. 

Click on the "Add Task" button and a modal will appear, prompting you to enter data for a new task to be added to the board.
```
* Enter a name, select a date using the date picker, and enter a description for your task.
* When you are satisfied, click the "Add Task" button in the modal. 
  * To cancel, click the 'x' on  the top right of the modal.
  * If any of these fields are blank, the application will return an error and no task will be added.
```
After you have added tasks, task cards will be listed in the "To Do" lane.
```
* Task cards are draggable elements. Move them to the desired lane.
  * If a task is due today, the card will highlight yellow.
  * If a task is past due, the card will highlight red.

* To delete a task, click the "Delete" button on the task card.
```
Task card data is stored in local storage, and the card and lane which it is in will persist through page refreshes. 

Deleted tasks do *NOT* persist, and are removed from storage.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Steven Ray Sapilan Moreno - smoreno2014@gmail.com

Project Link: [https://github.com/Nalipas/Task-Board](https://github.com/Nalipas/Task-Board)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* Special Thanks to [Chad Manuel](https://github.com/chdclar16) for motivation and support!
* Thanks to [Mark Carlson](https://github.com/mark-carlson) for instructor support!

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/Nalipas/Task-Board.svg?style=for-the-badge
[contributors-url]: https://github.com/Nalipas/Task-Board/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Nalipas/Task-Board.svg?style=for-the-badge
[forks-url]: https://github.com/Nalipas/Task-Board/network/members
[stars-shield]: https://img.shields.io/github/stars/Nalipas/Task-Board.svg?style=for-the-badge
[stars-url]: https://github.com/Nalipas/Task-Board/stargazers
[issues-shield]: https://img.shields.io/github/issues/Nalipas/Task-Board.svg?style=for-the-badge
[issues-url]: https://github.com/Nalipas/Task-Board/issues
[license-shield]: https://img.shields.io/github/license/Nalipas/Task-Board.svg?style=for-the-badge
[license-url]: https://github.com/Nalipas/Task-Board/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/msteven14
[product-screenshot]: ./assets/images/taskboardscreenshot.png
[product-gif]: ./assets/images/usagegif.gif
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
