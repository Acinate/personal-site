To install any version of Java on Ubuntu, we need to use **update-alternatives** which allows us to easily switch between different versions of java that we install on our machine.

You can find a list of all the available JDKs below. The file I will be downloading is `jdk-13.0.1_linux-x64_bin.tar.gz`

## Download JDK

### JDK 8
[https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)

### JDK 10
[https://www.oracle.com/technetwork/java/javase/downloads/jdk10-downloads-4416644.html](https://www.oracle.com/technetwork/java/javase/downloads/jdk10-downloads-4416644.html)

### JDK 11
[https://www.oracle.com/technetwork/java/javase/downloads/jdk11-downloads-5066655.html](https://www.oracle.com/technetwork/java/javase/downloads/jdk11-downloads-5066655.html)

### JDK 13
[https://www.oracle.com/technetwork/java/javase/downloads/jdk13-downloads-5672538.html](https://www.oracle.com/technetwork/java/javase/downloads/jdk13-downloads-5672538.html)

## Extract JDK
We will be extracting all of our JDK files into the following directory. Each version of Java will have its own folder.

```
/usr/lib/jvm/
```
 
Go to the folder where you downloaded `jdk-13.0.1_linux-x64_bin.tar.gz`. I usually download them into `~/Downloads` so lets navigate there.
```
$ cd ~/Downloads
```

Next extract the JDK
```
$ sudo tar -C /usr/lib/jvm -zxvf jdk-13.0.1_linux-x64_bin.tar.gz
```

Next rename the directory to something nicer
```
$ sudo mv /usr/lib/jvm/jdk-13.0.1 /usr/lib/jvm/java-13
```

## Add Java paths
Now we need to add a symbolic path in `/etc/alternatives` for the JDK we just extracted.

Create Java path
```
$ sudo update-alternatives --install /usr/bin/java java /usr/lib/jvm/java-13/bin/java 1
```

Create Javac path
```
$ sudo update-alternatives --install /usr/bin/javac javac /usr/lib/jvm/java-13/bin/javac 1
```

## Activate Java 13
We can switch JDKs at any time with the following command:
```shell
$ sudo update-alternatives --config java
```

You should be prompted with the following message:
```
There are 4 choices for the alternative java (providing /usr/bin/java).

  Selection    Path                           Priority   Status
------------------------------------------------------------
  0            /usr/lib/jvm/java-08/bin/java   1         auto mode
* 1            /usr/lib/jvm/java-08/bin/java   1         manual mode
  2            /usr/lib/jvm/java-10/bin/java   1         manual mode
  3            /usr/lib/jvm/java-11/bin/java   1         manual mode
  4            /usr/lib/jvm/java-13/bin/java   1         manual mode

Press <enter> to keep the current choice[*], or type selection number: 
```
Type whichever selection number matches the path to java-13, in my case it is `4`.

## Check your new Java version
To see if every worked successfully you can check your Java version.

For Java 10 and above:
```
$ java --version
```

For Java 8 and below:
```
$ java -version
```

If everything worked you should see the following:
```shell
java 13.0.1 2019-10-15
Java(TM) SE Runtime Environment (build 13.0.1+9)
Java HotSpot(TM) 64-Bit Server VM (build 13.0.1+9, mixed mode, sharing)
```