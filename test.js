var test = [{
    question: `SVM中的核技巧（Kernal trick）的作用包括以下哪项？。 
                <br>A. 特征降维
                <br>B. 特征升维
                <br>C. 防止过拟合
                <br>D. 以上说法都不对`,
    answer: "C"
}, {
    question: `一个公司薪资水平中位数是￥35000，排名25%和75%的薪资分别是￥21000和￥53000，如果某人的薪资是￥1，它可以被看作是异常值吗？
                <br>A.可以
                <br>B.不可以
                <br>C.需要更多的信息来判断
                <br>D.以上说法都不对`,
    answer: "C"
}, {
    question: `评估模型之后，得出模型存在偏差，下列哪种方法可能解决这一问题
                <br>A.减少模型中特征的数量
                <br>B.向模型中增加更多的特征
                <br>C.增加更多的数据
                <br>D.B 和 C`,
    answer: "B"
}, {
    question: `点击率的预测是一个数据比例不平衡问题（比如训练集中样本呈阴性的比例为99%，阳性的比例是1%），如果我们用这种数据建立模型并使得训练集的准确率高达99%。我们可以得出结论是
                <br>A.模型的准确率非常高，我们不需要进一步探索
                <br>B.模型不好，我们应建一个更好的模型
                <br>C.无法评价模型
                <br>D.以上都不正确`,
    answer: "B"
}, {
    question: `SVM（支持向量机）与LR（逻辑回归）的数学本质上的区别是什么
                <br>A.损失函数			
                <br>B.是否有核
                <br>C.是否支持多分类
                <br>D.其余选项皆错`,
    answer: "A"
}, {
    question: `不属于决策树的特征选择的方法是
                <br>A.信息增益率
                <br>B.信息增益
                <br>C.关联分析
                <br>D.基尼`,
    answer: "C"
}, {
    question: `随着模型复杂度的上升，训练误差会逐渐减少，测试误差也会逐渐减少
            <br>A.对
            <br>B.错
            `,
    answer: "B"
}, {
    question: `如果两个变量相关，他们一定是线性关系
                <br>A.对
                <br>B.错`,
    answer: "B"
}, {
    question: `K-均值算法中的K是指算法进行K次迭代
            <br>A.对
            <br>B.错`,
    answer: "B"
}, {
    question: `学习率决定了下降的步伐大小，下降的步伐大小非常重要，因为如果太小则找到函数最小值的速度就很慢，如果太大，则可能会出现overshoot the minimum的现象
            <br>A.对
            <br>B.错`,
    answer: "A"
}, {
    question: `衡量数据离散趋势的指标包括（多选）
            <br>A.极差
            <br>B.标准差
            <br>C.众数
            <br>D.均值
            `,
    answer: ["A", "B"],
    type: 'checkbox'
}, {
    question: `下列哪些假设是我们推导线性回归参数时遵循的
<br>A.X 与 Y 有线性关系（多项式关系）			
<br>B.模型误差在统计学上是独立的
<br>C.误差一般服从 0 均值和固定标准差的正态分布
<br>D.X 是非随机且测量没有误差的
`,
    answer: ["A", "B", "C", "D"],
    type: 'checkbox'
}, {
    question: `Hadoop分布式文件系统的客户端端上传文件的时候，下列哪项正确？
            <br>A.数据经过 NameNode 传递给 DataNode。			
            <br>B.Client 端将文件切分为 Block，依次上传。
            <br>C.Client 只上传数据到一台 DataNode，然后由 NameNode 负责 Block 复制工作。
            <br>D.以上都不正确
            `,
    answer: "B"
}, {
    question: `FTP采集在被动模式下，当开启一个 FTP 连接时，提交 PASV 命令。服务器会开启一个任意的端口返回如“227 entering passive mode (127,0,0,1,40,18)”。则服务器上有哪一个端口被开放（  ）。
<br>A.418
<br>B.4018
<br>C.10258
<br>D.40978
`,
    answer: "C"
}, {
    question: `Kafka分布式消息集群中是怎么体现消息顺序性，下列哪项正确？
            <br>A.每个分区内，每条消息都有一个offset，故只能保证分区内有序。
            <br>B.每个主题内，每条消息都有一个offset，故只能保证分区内有序。
            <br>C.每个节点内，每条消息都有一个offset，故只能保证分区内有序。
            <br>D.以上都不正确
            `,
    answer: "A"
}, {
    question: `当使用mount镜像设备或文件系统挂载的时候，需要用到的设备名称位于（ ）目录。
<br>A./home
<br>B./bin
<br>C./etc
<br>D./dev
`,
    answer: "D"
}, {
    question: `在实验集群的master节点使用jps命令查看进程时，终端出现以下哪项能说明Hadoop主节点启动成功？
            <br>A.Namenode,JobTracker, secondaryNameNode
            <br>B.Namenode,Datanode, Hmaster
            <br>C.Namenode,Datanode, secondaryNameNode
            <br>D.Namenode,Datanode, TaskTracker 
            `,
    answer: "D"
}, {
    question: `ftp协议命令中，不属于控制端口的命令是（  ）。
<br>A.cd
<br>B.pwd
<br>C.ls
<br>D.help
`,
    answer: "C"
}, {
    question: `
            单相桥式可控整流电路电感性负载时， 控制角α的移相范围是()。 
            <br>A.0～ 360°
            <br>B.0～ 270°
            <br>C.0～ 90°
            <br>D.0～ 180°
            `,
    answer: "C"
}, {
    question: `Cookie 存储了客户端的一些重要信息，例如身份标识、所在地区等，通常是一个文本文件。在向服务器发送 URL 请求时，可以将文件内容读出，附加在 HTTP 的请求头中，可以免去用户输入信息的麻烦。
<br>A.对
<br>B.错
`,
    answer: "A"
}, {
    question: `
    从一个空FIFO中读取数据是会发生阻塞，但从给一个空PIPE中读取数据时不会发生阻塞。
    <br>A.对
    <br>B.错
            `,
    answer: "B"
}, {
    question: `kafka消费者在某分区内消费消息数据操作顺序是先提交offset，后消费，有可能造成数据的重复。
    <br>A.对
    <br>B.错
`,
    answer: "A"
}, {
    question: `
    在计算中存储数据最小单位是字节。
    <br>A.对
    <br>B.错
            `,
    answer: "B"
}, {
    question: `各个设备工作在哪个层，正确说法包括（多选）。
<br>A.网卡工作在OSI参考模型的网络层。	"
<br>B.集线器HUB工作在OSI参考模型的物理层。
<br>C.交换机Switch工作在OSI参考模型的数据链路层。
<br>D.路由器Router工作在OSI参考模型的网络层。
`,
    answer: ["B", "C", "D"],
    type: 'checkbox'
}, {
    question: `
    动态网页采集技术类型包括（多选）。
            <br>A.构造带参数的 URL，利用参数传递动态请求。
            <br>B.构造 Cookie 携带参数，利用 HTTP 头部传递动态请求的参数。
            <br>C.离线分析 Ajax 的动态请求，使用静态页面采集技术。
            <br>D.模拟浏览器技术。
            `,
    answer: ["A", "B", "C", "D"],
    type: 'checkbox'
}, {
    question: `查询最低分大于70，最高分小于90的Sno列，下列脚本正确的是（  ）
<br>A."SELECT SNO FROM SCORE
GROUP BY SNO
WHERE
MAX(DEGREE)<90 AND MIN(DEGREE)>70;"
<br>B."SELECT SNO FROM SCORE
GROUP BY SNO
HAVING MAX(DEGREE)<90 AND MIN(DEGREE)>70;"
<br>C."SELECT SNO FROM SCORE
WHERE DEGREE<90 AND DEGREE>70
GROUP BY SNO
ORDER BY DEGREE
;"
<br>D."SELECT SNO
FROM SCORE
GROUP BY SNO
ORDER BY MAX(DEGREE)<90 AND MIN(DEGREE)>70;"
`,
    answer: "B"
}, {
    question: `
    多维报表是指（  ）
            <br>A.在多个维度上观察全员操作
            <br>B.不同维度格式不同叠加展示
            <br>C.旋转数据集的部分维度
            <br>D.在线分析或联机分析
            `,
    answer: "B"
}, {
    question: `查询姓“李”的老师的个数，脚本可以为（   ）
<br>A.SELECT COUNT(TEACHER.TID)FROM TEACHER WHERE TEACHER.TNAME LIKE'李%'
<br>B.SELECT COUNT(TEACHER.TID)FROM TEACHER WHERE TEACHER.TNAME LIKE'%李%'
<br>C.SELECT COUNT(TEACHER.TID)FROM TEACHER WHERE TEACHER.TNAME LIKE'%李%' GROUP BY TEACHER.TNAME
<br>D.SELECT COUNT(TEACHER.TID)FROM TEACHER WHERE TEACHER.TNAME LIKE'李%' GROUP BY TEACHER.TNAME
`,
    answer: "A"
}, {
    question: `
    数据仓库的最终目的是
            <br>A.收集业务需求
            <br>B.建立数据仓库逻辑模型
            <br>C.开发数据仓库的应用分析
            <br>D.为用户和业务部门提供决策支持
            `,
    answer: "D"
}, {
    question: `支撑大数据业务的基础是
<br>A.数据科学
<br>B.数据应用
<br>C.数据硬件
<br>D.数据人才
`,
    answer: "B"
}, {
    question: `
    客户电话属于度量
            <br>A.对
            <br>B.错
            `,
    answer: "B"
}, {
    question: `元数据是数据的数据
    <br>A.对
    <br>B.错
`,
    answer: "A"
}, {
    question: `
    维度表一般是有主键的
    <br>A.对
    <br>B.错
    `,
    answer: "A"
}, {
    question: `group  by 的字段可以不出现在SELECT中展示
    <br>A.对
    <br>B.错
`,
    answer: "B"
}, {
    question: `多维分析包含哪些操作？(多选)
            <br>A.切片
            <br>B.切块
            <br>C.钻取
            <br>D.旋转
            `,
    answer: ["A", "B", "C", "D"],
    type: 'checkbox'
}, {
    question: `查询和“李军”同性别的所有同学的Sname（假设只有一个叫李军的），下列sql脚本正确的是（  ）。(多选)
<br>A."SELECT SNAME FROM STUDENT
WHERE SSEX=(SELECT SSEX FROM STUDENT           WHERE SNAME='李军');
"
<br>B."SELECT A.SNAME
FROM STUDENT AS A, STUDENT AS B
WHERE A.SSEX=B.SSEX
AND A.CLASS=B.CLASS
AND B.SNAME='李军';"
<br>C."SELECT A.SNAME
FROM STUDENT AS A, STUDENT AS B
WHERE A.SSEX=B.SSEX
AND B.SNAME='李军';"
<br>D."SELECT SNAME FROM STUDENT
WHERE SSEX in  (SELECT SSEX FROM STUDENT     WHERE SNAME='李军');"
`,
    answer: ["A", "C", "D"],
    type: 'checkbox'
},]