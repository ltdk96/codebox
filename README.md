CodeBox - A Code Execution API for ThinkCode.VN
=========
**DISCLOSURE** - CodeBox is shared as it contributes to [_this final prize of my undergraduate thesis_][1]. However, the full and up-to-date repository of ThinkCode.VN (in Ruby-on-Rails and Elixir) is owned by [BMAG R&D][2].

---
**ThinkCode.VN** was a website that allows students and teachers to pair-program right from the browser.
1. Its back-end API is written in Ruby-on-Rails (content-workspace management) and NodeJS-Docker (safe code execution); by ME.
2. Its front-end SPA is written in AngularJS and [FirePad][3] (operational transform); thanks to [Nguyen Tran][4].

**CodeBox** is a locally installed API that utilizes NodeJS' _superb asynchronous capabilities_ to orchestrate multiple **Docker-based code sandbox(es)** concurrently. 

![CodeBox's RCES Workflow](https://i.imgur.com/qJGfeLt.png)

**CodeBox** extends [CompileBox][5] with many security improvements and one major feature - the ability to execute a **full code project** instead of a single code file. For more details, please kindly refer [this Poster][6].

---
## (Old) Shots of ThinkCode.VN

![ThinkCode's HomePage-Messages](https://i.imgur.com/xRT882t.png)

![ThinkCode's IDE](https://i.imgur.com/UcDUzQs.png)

[1]: https://international.fpt.edu.vn/blog?blog=fpt-university-students-won-prize-hcmc-young-informatics-contest
[2]: https://www.facebook.com/bmag.vn/
[3]: https://firepad.io/
[4]: https://github.com/nguyen-tran-qk
[5]: https://github.com/remoteinterview/compilebox
[6]: https://drive.google.com/open?id=1UR3e7rWqlprQfHSg5-q-fwlz5Qr_fqAI
