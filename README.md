CodeBox - The Code Execution Engine of ThinkCode.VN
=========
**DISCLOSURE** - The repo of ThinkCode.VN is currently owned by [BMAG R&D Lab][1], so I have no rights to publish it here. However, due to various reasons, the Lab decided to completely rewrite CodeBox based on [this paper of mine][2]; this repo is free to be shared.

---

**Project ThinkCode** (ThinkCode.VN) was a website that teaches programming using programming challenges instead of trivial fill-in-the-blank exercises. It had 2 major features:
1. Allows users to execute code right from the browser, made possible by **CodeBox** (this repo) in the back-end.
2. Allows users to pair program with the instructors, made possible by https://firepad.io/ in the front-end.

These features helped beginners to focus on essential programming concepts as designed by the challenges, instead of setting up or unnecessary details.

**Remark**: Please be aware that since this project is **no longer active**, its associated domain - https://thinkcode.vn - is down as well.

## Won Awards
**Project ThinkCode** won the [**3rd Prize in Creative Software** at **Ho Chi Minh City Youth Informatics Contest 2017**][3].

**CodeBox Engine (this repo)** won the **2nd Prize** at **FPT University's Research Conference for Students (2017)**.

## More Details on ThinkCode.VN
The API of ThinkCode.VN was written using **Ruby on Rails** + deployed on **Amazon EC2**. It has many features, including:
1. Code management (upload-download code-templates, extract-zip code-templates, file manipulation, etc.)
2. Content creation under a **multi-step, multi-agent** moderating process
3. Upload and quickly serve static assets using Amazon S3 and Cloudfront

While the back-end was entirely designed and developed by me, the front-end was entirely designed and developed by my wonderful teammate, [Nguyen Tran][4].

![ThinkCode's HomePage-Messages](https://i.imgur.com/xRT882t.png)

![ThinkCode's IDE](https://i.imgur.com/UcDUzQs.png)

## More Details on CodeBox (this repo)
CodeBox is a **locally installed** Node.js API that wraps a **Docker-based sandbox** inside to **run untrusted code** on-demand, returning outputs to the local sender.

CodeBox is developed based on **CompileBox** (https://github.com/remoteinterview/compilebox) with many security improvements and one major feature - the ability to execute a **full code project** instead of a single code file. This is valuable to ThinkCode.VN because code challenges often include many template-files, and we need to grade users' submissions.

For an overview of the features and how safe CodeBox is in running untrusted code, please kindly refer to [this poster][5]. 

For more details on the implementation of CodeBox, please kindly refer to [this paper][2].

[1]: https://www.facebook.com/bmag.vn/
[2]: https://drive.google.com/open?id=1x7_zMWfhSSZF_zkQG927pP2Htx_Qb3j-
[3]: http://international.fpt.edu.vn/fpt-university-students-won-prize-hcmc-young-informatics-contest/
[4]: https://github.com/nguyenkevtran
[5]: https://drive.google.com/open?id=1UR3e7rWqlprQfHSg5-q-fwlz5Qr_fqAI
