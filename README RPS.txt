Path
----
C:\Users\danmo\Desktop\Coding Course


PS C:\Users\danmo\Desktop\Coding Course> ls


    Directory: C:\Users\danmo\Desktop\Coding Course


Mode                 LastWriteTime         Length Name                                                                                  
d-----        02/05/2023     14:52                CodecademyHTMLCSS                                                                     
d-----        17/05/2023     09:47                CodecademyJavaScript                                                                  
d-----        05/04/2023     13:51                Step 1                                                                                
-a----        30/05/2023     15:56           1562 GitGuide.txt                                                                          


cd : Cannot find path 'C:\Users\danmo\Desktop\Coding Course\Projects' because it does not exist.
At line:1 char:1
+ cd Projects
+ ~~~~~~~~~~~
    + CategoryInfo          : ObjectNotFound: (C:\Users\danmo\...Course\Projects:String) [Set-Location], ItemNotFoundException
    + FullyQualifiedErrorId : PathNotFound,Microsoft.PowerShell.Commands.SetLocationCommand
 
PS C:\Users\danmo\Desktop\Coding Course> cd CodecademyJavaScript
PS C:\Users\danmo\Desktop\Coding Course\CodecademyJavaScript> ls


    Directory: C:\Users\danmo\Desktop\Coding Course\CodecademyJavaScript


Mode                 LastWriteTime         Length Name                                                                                  
----                 -------------         ------ ----                                                                                  
d-----        24/05/2023     16:16                Projects                                                                              
-a----        30/05/2023     11:53          18733 Master.js                                                                             


PS C:\Users\danmo\Desktop\Coding Course\CodecademyJavaScript> cd Projects
PS C:\Users\danmo\Desktop\Coding Course\CodecademyJavaScript\Projects> git init
Initialized empty Git repository in C:/Users/danmo/Desktop/Coding Course/CodecademyJavaScript/Projects/.git/
PS C:\Users\danmo\Desktop\Coding Course\CodecademyJavaScript\Projects> git add rockPaperScissors.js
PS C:\Users\danmo\Desktop\Coding Course\CodecademyJavaScript\Projects> git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   rockPaperScissors.js

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        creditCardChecker.js

PS C:\Users\danmo\Desktop\Coding Course\CodecademyJavaScript\Projects> git commit -m "Commit RPS Game"
[master (root-commit) 66edeb4] Commit RPS Game
 1 file changed, 69 insertions(+)
 create mode 100644 rockPaperScissors.js
PS C:\Users\danmo\Desktop\Coding Course\CodecademyJavaScript\Projects> git remote add origin https://github.com/MangoDanMoo/rockPaperScissors.git
>> git branch -M main
>> git push -u origin main
Enumerating objects: 3, done.
Counting objects: 100% (3/3), done.
Delta compression using up to 16 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 726 bytes | 726.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/MangoDanMoo/rockPaperScissors.git
 * [new branch]      main -> main
branch 'main' set up to track 'origin/main'.
PS C:\Users\danmo\Desktop\Coding Course\CodecademyJavaScript\Projects> 