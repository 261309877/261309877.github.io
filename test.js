var test = [
    {
        question: `ETL工具有哪些（ ）	<br>A.Datax	<br>B.Kettle	<br>C.DataPipeline	<br>D.Informatica`, answer: ["A", "B", "C", "D"], type: "checkbox"
    },
    {
        question: `ETL对数据做哪些处理过程（）	<br>A.抽取	<br>B.转换	<br>C.加载	<br>D.调用`, answer: ["A", "B", "C"], type: "checkbox"
    },
    {
        question: `Kettle包括哪些产品（）	<br>A.Spoon	<br>B.CHEF	<br>C.Pan	<br>D.Kitchen`, answer: ["A", "B", "C", "D"], type: "checkbox"
    },
    {
        question: `DataX是阿里开源的一个异构数据源离线同步工，它支持哪些数据库（）	<br>A.Postgre	<br>B.HDFS	<br>C.HIVE	<br>D.MYSQL`, answer: ["A", "B", "C", "D"], type: "checkbox"
    },
    {
        question: `Kettle支持在哪些环境下运行（）	<br>A.windows	<br>B.linux	<br>C.android	<br>D.Unix`, answer: ["A", "B", "D"], type: "checkbox"
    },
    {
        question: `ETL会对哪些数据进行处理（）　	<br>A.分散数据	<br>B.标准数据	<br>C.零乱数据	<br>D.标准不统一数据`, answer: ["A", "C", "D"], type: "checkbox"
    },
    {
        question: `ETL支持哪些技术语言（）	<br>A.JAVA	<br>B.python	<br>C.'C#'	<br>D.SHELL脚本语言`, answer: ["A", "B", "C", "D"], type: "checkbox"
    },
    {
        question: `ETL是一种数据仓库技术	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `ETL不支持JAVA语言	<br>A.对	<br>B.错`, answer: "B"
    },
    {
        question: `ETL工具技术只有Kettle	<br>A.对	<br>B.错`, answer: "B"
    },
    {
        question: `DataX不支持数据同步	<br>A.对	<br>B.错`, answer: "B"
    },
    {
        question: `ETL不能对数据进行转换	<br>A.对	<br>B.错`, answer: "B"
    },
    {
        question: `Kettle包括SPOON　	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `ETL可以在LINUX上运行	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `Kettle部署环境为运行LINUX，transformation文件是通过pan.sh来运行的　	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `Kettle支持HIVE数据转入到MYSQL	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `Kettle支持字符替换转换	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `ETL工具支持一对多的映射转换	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `DataX框架采用Framework + plugin架构构建	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `Spoon不支持mongoDB	<br>A.对	<br>B.错`, answer: "B"
    },
    {
        question: `运用Kettle技术执行HIVE到HIVE直接转换速度很慢	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `kettle功能不包括（）	<br>A.数据清洗	<br>B.数据分析	<br>C.数据转换	<br>D.数据抽取`, answer: "B"
    },
    {
        question: `DataX开源框架由哪个公司提供（）	<br>A.腾讯	<br>B.谷歌	<br>C.网易	<br>D.阿里`, answer: "D"
    },
    {
        question: `Kettle不包括以下哪个产品（）	<br>A.Spoon	<br>B.DataX	<br>C.Pan	<br>D.Kitchen`, answer: "B"
    },
    {
        question: `Kettle启动文件是（）	<br>A.spoon.bat	<br>B.spoon.sql	<br>C.spoon.shell	<br>D.spoon.txt`, answer: "A"
    },
    {
        question: `ETL抽取阶段的主要任务包括（）	<br>A.抽取数据到数据准备区	<br>B.存储结果数据	<br>C.修改数据	<br>D.删除数据`, answer: "A"
    },
    {
        question: `ETL清洗阶段的主要任务不包括	<br>A.清洗并增补数据结构	<br>B.增补复杂的业务规则	<br>C.变化数据捕获	<br>D.建立元数据库描述数据质量`, answer: "C"
    },
    {
        question: `ETL支持的数据源不包括（）	<br>A.TXT　	<br>B.MYSQL　	<br>C.HIVE	<br>D.　PNG文件`, answer: "D"
    },
    {
        question: `DATAX中，关于epoll和select的区别不包括（）　	<br>A.select能并行支持I/O比较小，且无法修改。	<br>B.epoll支持水平触发和边沿触发两种模式。	<br>C.epoll相比select效率更高，主要是基于其操作系统支持的I/O事件通知机制，而select是基于轮询机制。	<br>D.epoll和select都是I/O多路复用的技术，都可以实现同时监听多个I/O事件的状态。`, answer: "A"
    },
    {
        question: `Kettle的描述正确的是（）	<br>A.支持分布式	<br>B.它不是开源框架	<br>C.　不支持分布式	<br>D.Spoon支持mongoDB`, answer: "C"
    },
    {
        question: `使用ETL带来的价值不含（）	<br>A.内部业务系统的数据集成	<br>B.外部业务系统数据	<br>C.大型装备工况数据的采集分析	<br>D.快速集成分散数据`, answer: "B"
    },
    {
        question: `ETL不支持以下哪种技术语言对接（）	<br>A.JAVA　	<br>B.python　	<br>C.TXT　	<br>D.C#`, answer: "C"
    },
    {
        question: `ETL无需对哪些数据进行处理（）	<br>A.分散数据	<br>B.标准数据	<br>C.零乱数据	<br>D.标准不统一数据`, answer: "B"
    },
    {
        question: `ETL处理有哪些模块，除了（）	<br>A.数据抽取	<br>B.数据清洗　	<br>C.数据分离	<br>D.　库内转换`, answer: "C"
    },
    {
        question: `ETL中数据转换支持哪些场景，除了（）	<br>A.字符替换	<br>B.　重复过滤	<br>C.　字段拆分　	<br>D.　图片解析　`, answer: "D"
    },
    {
        question: `ETL架构的优势不包括（）	<br>A.可以分担数据库系统的负载	<br>B.相对于ELT架构可以实现更为复杂的数据转换逻辑	<br>C.与底层的数据库存储有关	<br>D.采用单独的硬件服务器`, answer: "C"
    },
    {
        question: `ETL支持下列哪些场景，除了（）	<br>A.增量　　	<br>B.全量　　	<br>C.覆盖　　	<br>D.修改目标表结构`, answer: "D"
    },
    {
        question: `Kettle概念不包括（）　	<br>A.它是由JAVA语言研发的　	<br>B.Kettle中Job中的JobEntry是并行执行	<br>C.Kettle可以被归类为可视化编程语言	<br>D.Kettle 里的图就是转换和作业`, answer: "B"
    },
    {
        question: `Kettle转换的数据类型不含（）	<br>A.String 　	<br>B.Integer　	<br>C.JPG　	<br>D.Boolean　`, answer: "C"
    },
    {
        question: `DATAX中的Framework用于连接（）	<br>A.ORACLE　	<br>B.reader	<br>C.　MYSQL	<br>D.　　HIVE`, answer: "B"
    },
    {
        question: `DATAX中启动服务（）	<br>A. /sbin/service crond restart　	<br>B.　/sbin/service crond stop　	<br>C.　/sbin/service crond start　　 	<br>D./sbin/service crond reload`, answer: "C"
    },
    {
        question: `Kettle支持在不能在哪个环境下运行（）	<br>A.WINDOWS　	<br>B.LINUX	<br>C.　Unix	<br>D.　IOS　　`, answer: "D"
    },
    {
        question: `下列属于反映比例关系的可视化图表的是()。	<br>A.旭日图	<br>B.散点图	<br>C.热力图	<br>D.气泡图`, answer: "A"
    },
    {
        question: `对图表进行修改，我们可以在选取对象后，进行()操作进行修改。	<br>A.单击鼠标	<br>B.双击鼠标	<br>C.右击鼠标	<br>D.左击鼠标`, answer: "C"
    },
    {
        question: `显示一段时间内数据的大小变化或显示各项之间的比较情况，我们往往选择哪类图表()。	<br>A.旭日图	<br>B.柱形图	<br>C.热力图	<br>D.气泡图`, answer: "B"
    },
    {
        question: `为了形象、直观地表示数值大小及变化趋势时，往往选择()	<br>A.数字	<br>B.文字	<br>C.表格	<br>D.图表`, answer: "D"
    },
    {
        question: `下列属于反映数据走向可视化图表的是()	<br>A.散点图	<br>B.折线图	<br>C.雷达	<br>D.文字`, answer: "B"
    },
    {
        question: `下列不属于数据可视化工具的是()	<br>A.Tableau	<br>B.DataV	<br>C.PowerPoint	<br>D.Power BI`, answer: "C"
    },
    {
        question: `显示一个整体内各部分所占的比例，我们往往选择哪类图表()	<br>A.饼图	<br>B.散点图	<br>C.热力图	<br>D.气泡图`, answer: "A"
    },
    {
        question: `下列属于基本图表的是（）	<br>A.瀑布图	<br>B.滑珠图	<br>C.漏斗图	<br>D.柱形图`, answer: "D"
    },
    {
        question: `以下()图可以有效地提供不同商品的销售和趋势情况。	<br>A.饼图	<br>B.分组直方图	<br>C.气泡图	<br>D.条形图和线图的组合图`, answer: "D"
    },
    {
        question: `在使用图表呈现分析结果时，要描叙全校男女同学的比例关系，最好使用	<br>A.柱形图	<br>B.条形图	<br>C.折线图	<br>D.饼状图`, answer: "D"
    },
    {
        question: `商务数据分析流程中最耗费时间的是()	<br>A.数据收集	<br>B.数据处理	<br>C.数据分析	<br>D.数据展现`, answer: "B"
    },
    {
        question: `可以表达清晰的层级和归属关系，以父子层次结构来显示数据构成情况的是（）。	<br>A.桑基图	<br>B.旭日图	<br>C.树图	<br>D.瀑布图`, answer: "B"
    },
    {
        question: `需要统计数值区间的分布，例如年龄段的人数、收入水平、工资收入分布等推荐使用（）。	<br>A.直方图	<br>B.散点图	<br>C.热力图	<br>D.气泡图`, answer: "A"
    },
    {
        question: `展现数据流动的桑基图的构成不包括以下哪一个（）	<br>A.边	<br>B.流量	<br>C.节点	<br>D.值`, answer: "D"
    },
    {
        question: `下面哪些优势不属于线图（）。	<br>A.展现数据的增减趋势	<br>B.展现数据的增减的速率	<br>C.展现数据的峰值特征	<br>D.多个指标进行趋势对比`, answer: "D"
    },
    {
        question: `集中趋势反映变量数值向特定中心靠拢的趋势的统计量。	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `数据清洗是发现并纠正数据文件中可识别错误的第一道程序。	<br>A.对	<br>B.错`, answer: "B"
    },
    {
        question: `雷达图又称为蜘蛛网图，是财务分析报表的一种。 	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `常见的反映差异化的图表类型是气泡图。	<br>A.对	<br>B.错`, answer: "B"
    },
    {
        question: `数据透视表是一种交互式报表，能对大量的数据进行汇总，帮助读者分析和处理数据。	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `数据处理指对收集到的数据进行加工整理，形成适合数据分析的样式，它是数据分析前必不可少的阶段，主要包括数据清洗，数据转化、数据提取、数据计算等。	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `圆环图显示各个部分与整体之间的关系，可以包含多个数据系列，所以可以将圆环图看成特殊的饼图。	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `饼图一般用于显示数据系列中各项的大小与各项总和的比例，饼图中的数据点显示为整个饼图的百分比。	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `瀑布图是由麦肯锡顾问公司所独创的图表类型，此种图表采用绝对值与相对值结合的方式，适用于表达数个特定数值之间的数量变化关系。	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `图例就是集中与图表一角或一侧的各种形状和颜色所代表内容与指标的说明。	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `反映发展趋势的可视化图表有哪些( )。	<br>A.柱形图	<br>B.折线图	<br>C.面积图	<br>D.散点图`, answer: ["A", "B", "C"], type: "checkbox"
    },
    {
        question: `按数据组织的类型划分，柱形图可以分为( )。	<br>A.簇状柱形图	<br>B.堆积柱形图	<br>C.百分比堆积柱形图	<br>D.圆锥柱形图`, answer: ["A", "B", "C"], type: "checkbox"
    },
    {
        question: `商务数据可视化要简约，所以要避免()等不必要的设计。	<br>A.文本的3D效果	<br>B.毫无关联的元素	<br>C.对比鲜明的色彩	<br>D.装饰性的插图`, answer: ["A", "B", "D"], type: "checkbox"
    },
    {
        question: `图表设计主要分为(）	<br>A.A.配色设计	<br>B.B.内容设计	<br>C.C.图片设计	<br>D.D.版式设计`, answer: ["A", "D"], type: "checkbox"
    },
    {
        question: `在可视化平台画布编辑器页面组件被锁定有什么作用（）	<br>A.不可修改	<br>B.不可移动	<br>C.不可删除	<br>D.不可复制`, answer: ["A", "B", "C", "D"], type: "checkbox"
    },
    {
        question: `样本的方差能够近似地反映整体的()	<br>A.平均状态	<br>B.散布规律	<br>C.波动大小	<br>D.最大值和最小值`, answer: "C"
    },
    {
        question: `某企业生产某种产品的产量每年增加十万吨，则该产品产量的环比增长速度	<br>A.法得出结论	<br>B.年年增长	<br>C.年年保持不变	<br>D.年年下降`, answer: "D"
    },
    {
        question: `测量抽样误差最常用的指标是	<br>A.变异系数	<br>B.标准差	<br>C.抽样方差	<br>D.置信区间`, answer: "B"
    },
    {
        question: `某商店计划规定本年费用水平比去年下降4%，实际下降了6%，则该商店费用水平计划完成程度是()	<br>A.0.979	<br>B.1.019	<br>C.1.021	<br>D.1.5`, answer: "A"
    },
    {
        question: `现有一批数据为(0,1,2,-2,3,-3,4)， 则这批数据的极差为()	<br>A.4	<br>B.5	<br>C.6	<br>D.7`, answer: "D"
    },
    {
        question: `对于一个右偏的频数分布，一般情况下()的值最大。	<br>A.中位数	<br>B.众数	<br>C.算术平均数	<br>D.无法判断`, answer: "C"
    },
    {
        question: `数据可视化是使用可视化应用的方式来分析并展示庞杂数据的产品。	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `数据清洗是发现并纠正数据文件中可识别错误第一道程序。	<br>A.对	<br>B.错`, answer: "B"
    },
    {
        question: `交叉型数据属于脏数据。	<br>A.对	<br>B.错`, answer: "B"
    },
    {
        question: `默认的切片器项目是横向向分布的。	<br>A.对	<br>B.错`, answer: "B"
    },
    {
        question: `下列属于查找重复数据的方法的是( )。	<br>A.条件格式法	<br>B.函数法	<br>C.高级筛选法	<br>D.数据透视表法`, answer: ["A", "B", "C", "D"], type: "checkbox"
    },
    {
        question: `下列属于特殊图表的是( )。	<br>A.子弹图	<br>B.甘特图	<br>C.断层图	<br>D.气泡图`, answer: ["A", "B", "C"], type: "checkbox"
    },
    {
        question: `下列不属于技术元数据的是？	<br>A.数据表结构	<br>B.调度作业之间的依赖关系	<br>C.ETL任务的定时时间	<br>D.敏感数据的安全申请流程`, answer: "D"
    },
    {
        question: `下列有关数据质量的说法错误的是？	<br>A.数据在计划、获取、存储、共享、维护、应用、消亡生命周期的每个阶段里可能引发的各类数据质量问题。	<br>B.数据是否按照时间的要求进行上传不是衡量数据质量的指标。	<br>C.数据质量管理是指运用相关技术来衡量、提高和确保数据质量的规划、实施与控制等一系列活动。	<br>D.数据标准是数据质量稽核规则的主要参考依据。`, answer: "B"
    },
    {
        question: `数据字典是对系统中（）的描述？	<br>A.数据	<br>B.处理	<br>C.功能	<br>D.权限`, answer: "A"
    },
    {
        question: `下列哪一项不是数据仓库的特点？	<br>A.面向主题的	<br>B.集成的	<br>C.相对稳定的	<br>D.实时的`, answer: "D"
    },
    {
        question: `哪一个数据质量维度用于度量哪些数据和信息是不正确的，或者数据是超期的？	<br>A.规范性	<br>B.一致性	<br>C.准确性	<br>D.关联性`, answer: "C"
    },
    {
        question: `关系型数据库中，关于主键的描述正确的是？	<br>A.标识表中唯一的实体	<br>B.创建唯一索引，允许空值	<br>C.只允许以表中第一字段建立	<br>D.一个表中允许有多个主键`, answer: "A"
    },
    {
        question: `假设使用一种加密算法，它的加密方法很简单：将每一个字母加5，即a加密成f。这种算法的密钥就是5，那么它属于()	<br>A.分组密码技术	<br>B.对称加密技术	<br>C.公钥加密技术	<br>D.单向函数密码技术`, answer: "B"
    },
    {
        question: `在多维分析中，将多维下标的取值降低到较低的概念层次上，从而形成新的统计查询结果，并进行分析，这样的动作称之为	<br>A.上钻	<br>B.下钻	<br>C.旋转	<br>D.切片`, answer: "B"
    },
    {
        question: `分析指标中的统计口径属于元数据的？	<br>A.技术元数据	<br>B.业务元数据	<br>C.管理元数据	<br>D.不属于元数据`, answer: "B"
    },
    {
        question: `下列哪一项属于数据质量完整性检查？	<br>A.今天用户发展量与昨天用户发展量比不超过5%	<br>B.用户姓名不允许为空	<br>C.用户身份证号码全局唯一	<br>D.用户的性别不能为男和女以外的其他性别`, answer: "B"
    },
    {
        question: `以下那个表属于事实表?	<br>A.销售订单记录表	<br>B.产品类型表	<br>C.日期表	<br>D.区域表`, answer: "A"
    },
    {
        question: `以下类型数据属于结构化数据的是?	<br>A.数据库表	<br>B.图片	<br>C.音频	<br>D.视频`, answer: "A"
    },
    {
        question: `以下不属于数据聚合函数的是？	<br>A.AVG	<br>B.SUM	<br>C.SUBSTR	<br>D.COUNT`, answer: "C"
    },
    {
        question: `以下哪一个命令，不能取消文件所有者用户的可执行权限？	<br>A.chmod u-x,g-x file	<br>B.chmod ugo-x file	<br>C.chmod 640 file	<br>D.chmod 754 file`, answer: "D"
    },
    {
        question: `以下哪一个命令，不能查看文件内容？	<br>A.wc	<br>B.cat	<br>C.vi	<br>D.more`, answer: "A"
    },
    {
        question: `数据管理能力等级标准第5级为？	<br>A.受管理级	<br>B.稳健级	<br>C.量化管理级	<br>D.优化级`, answer: "D"
    },
    {
        question: `以下OLTP和OLAP的区别正确的是？	<br>A.OLTP作为企业高层进行决策的参考,OLAP则主要供基层人员使用	<br>B.OLTP主要为后台分析，OLAP主要为日常业务操作	<br>C.OLTP单笔吞吐量小，OLAP则单笔吞吐量大	<br>D.OLAP具有实时性，OLTP对时间要求不严格`, answer: "C"
    },
    {
        question: `以下哪一项不属于基础类数据标准？	<br>A.参考数据和主数据标准	<br>B.物理数据模型标准	<br>C.基础指标标准	<br>D.元数据标准`, answer: "C"
    },
    {
        question: `有关数据仓库ODS层的说法错误的是？	<br>A.ODS全称是 Operational Data Store，操作数据存储，是“面向主题的”数据运营层。	<br>B.ODS层用于存储每天的增量数据和变更数据。	<br>C.数据源中的数据，经过抽取、清洗、传输后装入ODS层。	<br>D.在源数据装入ODS层时，可以进行诸如去噪、去重、字段命名规范等一系列操作。`, answer: "B"
    },
    {
        question: `主数据管理的关键活动不包括？	<br>A.定义和维护数据整合架构	<br>B.定义和维护数据匹配规则	<br>C.根据业务规则和数据质量标准对收集到的主数据进行加工清理	<br>D.剖析、分析和评估数据质量`, answer: "D"
    },
    {
        question: `下列有关Kerberos协议认证过程的实现错误的是？	<br>A.依赖于主机操作系统的认证	<br>B.不基于主机地址的信任	<br>C.不要求网络上所有主机的物理安全	<br>D.以假定网络上传送的数据包可以被任意读取、修改和插入数据为前提设计的`, answer: "A"
    },
    {
        question: `元数据是描述数据的数据。	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `元数据可应用于血缘分析、影响分析、数据地图等分析应用。	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `即席查询是用户根据自己的需求，灵活的选择查询条件，系统能够根据用户的选择生成相应的统计报表。	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `BASE64是一种摘要算法，作用是让大容量信息在用数字签名软件签署私人密钥前被"压缩"成一种保密的格式。	<br>A.对	<br>B.错`, answer: "B"
    },
    {
        question: `连接查询有内连接和外连接之分，内连接只能实现两个表的查询，外连接可以实现多个表的查询。	<br>A.对	<br>B.错`, answer: "B"
    },
    {
        question: `常见的业务系统如ERP、CRM、OA等系统都属于OLAP。	<br>A.对	<br>B.错`, answer: "B"
    },
    {
        question: `文件权限'rwx rwx rwx'中第三组rwx代表的是文件所有者所在的组群的读写执行权限。	<br>A.对	<br>B.错`, answer: "B"
    },
    {
        question: `使用命令ls-l可以列出一个目录下的所有文件。	<br>A.对	<br>B.错`, answer: "B"
    },
    {
        question: `使用GROUP BY分组查询时，SELECT子句后的非聚合函数字段可以是GROUP BY后分组字段之外的字段。	<br>A.对	<br>B.错`, answer: "B"
    },
    {
        question: `使用HAVING子句的SQL通常要包含GROUP BY子句。	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `组织应定义数据生存周期，并对全生存周期制定唯一的管理策略，降低成本和风险，支撑数据资源管理和数据资产运营。	<br>A.对	<br>B.错`, answer: "B"
    },
    {
        question: `数据元定义为用一组属性描述定义、标识、表示和允许值的数据单元。	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `网络运营者不得违反收集使用规则使用个人信息。因业务需要，确需扩大个人信息使用范围的，应当征得个人信息主体同意。	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `设计并实施数据质量管理工具不属于数据质量管理工作中的关键活动。	<br>A.对	<br>B.错`, answer: "B"
    },
    {
        question: `下列哪些属于大数据安全防护手段？	<br>A.数据脱敏	<br>B.数据水印	<br>C.数据溯源	<br>D.访问控制`, answer: ["A", "B", "C", "D"], type: "checkbox"
    },
    {
        question: `以下哪些加密算法是不可逆的？	<br>A.RSA	<br>B.DES	<br>C.SHA	<br>D.MD5`, answer: ["C", "D"], type: "checkbox"
    },
    {
        question: `公司要分析每个月各产品的销售量和收入情况，其中属于度量的是？	<br>A.月份	<br>B.产品类型	<br>C.销售量	<br>D.收入金额`, answer: ["A", "B"], type: "checkbox"
    },
    {
        question: `下列命令哪些可用于文件的压缩或解压缩？	<br>A.tar命令	<br>B.gz命令	<br>C.zip命令	<br>D.touch命令`, answer: ["A", "B", "C"], type: "checkbox"
    },
    {
        question: `要筛选人事部的男性员工和财务部级别高于5级的男性员工，以下条件正确的是?	<br>A.SEX = '男' AND ((DEPT = '人事部' OR DEPT = '财务部') AND LVL > 5) OR (DEPT = '人事部' AND LVL <= 5)	<br>B.((DEPT = '人事部' OR DEPT = '财务部') AND SEX = '男' AND LVL > 5 ) OR (DEPT = '人事部' AND SEX = '男' AND LVL <= 5)	<br>C.(DEPT = '人事部' AND SEX = '男') OR (DEPT = '财务部' AND SEX = '男 AND LVL > 5)	<br>D.SEX = '男' AND (DEPT = '人事部' OR (DEPT = '财务部' AND LVL > 5))`, answer: ["B", "C", "D"], type: "checkbox"
    },
    {
        question: `数据治理的目标是保障数据及其应用过程中的（ ）？	<br>A.运营合规	<br>B.算力融合	<br>C.风险可控	<br>D.价值实现`, answer: ["A", "C", "D"], type: "checkbox"
    },
    {
        question: `对于空缺值的清洗可以采取的策略有？	<br>A.忽略元组	<br>B.人工补全空缺值	<br>C.使用一个全局变量填充空缺值	<br>D.使用属性的平均值、中问值、最大值、最小值或更为复杂的概率统计函数值来填充空缺值`, answer: ["A", "B", "C", "D"], type: "checkbox"
    },
    {
        question: `HDFS2.0 默认 Block Size大小是多少（  ）。	<br>A.32MB	<br>B.64MB	<br>C.128MB	<br>D.256MB`, answer: "B"
    },
    {
        question: `在计算机中，所有信息存放和处理采用（  ）。	<br>A.ASCII	<br>B.二进制	<br>C.十进制	<br>D.十六进制`, answer: "B"
    },
    {
        question: `将二进制1110111转换成十六进制数是（  ）。	<br>A.77	<br>B.C7	<br>C.D7	<br>D.E7`, answer: "A"
    },
    {
        question: `随着HDFS数据量的增长，以及对于数据使用方式的多样化 ，HDFS的架构局限性就逐渐被放大，NameNode在大规模场景很容易成为瓶颈的主要原因是（  ）。	<br>A.CPU	<br>B.内存	<br>C.磁盘空间	<br>D.网络IO`, answer: "B"
    },
    {
        question: `下面哪个程序（  ）负责 HDFS 数据存储。 	<br>A.NameNode	<br>B.Jobtracker	<br>C.Datanode	<br>D.secondaryNameNode`, answer: "C"
    },
    {
        question: `不具备扩展性的存储架构有（  ）。	<br>A.DAS	<br>B.NAS	<br>C.SAN	<br>D.IP SAN`, answer: "A"
    },
    {
        question: `大数据ETL不包含以下哪些数据处理操作（  ）。	<br>A.数据提取	<br>B.数据转化	<br>C.数据装载	<br>D.数据分析`, answer: "D"
    },
    {
        question: `某计费网元记录用户通话记录，该条数据一般存储单位（  ）。	<br>A.Byte	<br>B.KB	<br>C.MB	<br>D.GB`, answer: "A"
    },
    {
        question: `在centos linux操作系统，查询主机IO使用情况命令是（  ）。	<br>A.ls	<br>B.ps	<br>C.top	<br>D.iostat`, answer: "D"
    },
    {
        question: `应用技术（  ）是运行在用户空间上利用自身提供的数据平面库来收发数据包，绕过了Linux内核协议栈对数据包处理过程。	<br>A.DPDK	<br>B.SOKCET	<br>C.FTP	<br>D.SHELL`, answer: "A"
    },
    {
        question: `大数据所涉及关键技术很多，主要包括采集、存储、管理、分析与挖掘相关技术。其中HBase属于（ ）技术。	<br>A.数据采集	<br>B.数据存储	<br>C.数据管理	<br>D.数据分析与挖掘`, answer: "B"
    },
    {
        question: `以下哪一项属于非结构化数据	<br>A.企业ERP数据	<br>B.财务系统数据	<br>C.视频监控数据	<br>D.日志数据`, answer: "C"
    },
    {
        question: `ftp文件采集协议默认的数据端口是（  ）。	<br>A.20	<br>B.21	<br>C.22	<br>D.23`, answer: "A"
    },
    {
        question: `客户端通过ftp命令登录某ftp服务器，以下哪个是列出远端列表文件命令（  ）。	<br>A.get	<br>B.ls	<br>C.type	<br>D.lcd`, answer: "B"
    },
    {
        question: `客户端通过ftp命令登录某ftp服务器，以下哪项不能查看远端文件信息（  ）。	<br>A.文件名	<br>B.文件大小	<br>C.文件内容	<br>D.文件生成时间`, answer: "C"
    },
    {
        question: `HIVE的内部表其实就是管理表，当我们删除一个管理表时，Hive也会删除这个表中数据。	<br>A.对	<br>B.错`, answer: "B"
    },
    {
        question: `KAFKA集群的数量越多越好，最好超过7个，因为节点越多，整个群组的吞吐量就越高。	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `宽度优先的策略使用堆栈作为存储结构。深度优先的策略，需要采用队列作为存储结构。	<br>A.对	<br>B.错`, answer: "B"
    },
    {
        question: `互联网数据分布在网页不同位置，我们很难采集下来。	<br>A.对	<br>B.错`, answer: "B"
    },
    {
        question: `在centos linux操作系统安装vsftpd服务，根据/etc/vsftpd/vsftpd.conf默认配置给出设定功能。	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `redis分布式缓存集群扩容内存，需要重启redis服务。	<br>A.对	<br>B.错`, answer: "B"
    },
    {
        question: `flume拦截器是Source在将Event写入到Channel之前可以使用拦截器对Event进行各种形式的处理。	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `SFTP使用了加密/解密技术，传输效率比普通的FTP要高，但网络安全得到了极大的保证。	<br>A.对	<br>B.错`, answer: "B"
    },
    {
        question: `Kettle是一款国外优秀的开源ETL工具，可以在Windows、Linux运行，但不可以UNIX上运行。	<br>A.对	<br>B.错`, answer: "B"
    },
    {
        question: `TCP提供的是面向连接的、可靠的数据流传输，而UDP提供的是非面向连接的、不可靠的数据流传输。	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `主机访问存储的主要模式包括（  ）。	<br>A.NAS	<br>B.SAN	<br>C.DAS	<br>D.NFS`, answer: ["A", "B", "C"], type: "checkbox"
    },
    {
        question: `下面哪些（  ）流式数据存储介质。	<br>A.kafka	<br>B.MQ	<br>C.Mysql	<br>D.HDFS`, answer: ["A", "B", "C"], type: "checkbox"
    },
    {
        question: `以下哪些适用大数据ETL工具（  ）。	<br>A.Kettle	<br>B.Talend	<br>C.DataX	<br>D.Oracle`, answer: ["A", "B", "C"], type: "checkbox"
    },
    {
        question: `ftp应用协议采集数据文件，属于获取文件命令是（  ）。	<br>A.get	<br>B.put	<br>C.mget	<br>D.mput`, answer: ["A", "C"], type: "checkbox"
    },
    {
        question: `操作系统默认端口及相对的服务，正确说法包括（  ）。	<br>A.21端口：文件传输FTP服务	<br>B.25端口:简单邮件发送服务	<br>C.80端口:HTTP万维网发布服务	<br>D.445端口：安全超文本传输服务`, answer: ["A", "B", "C"], type: "checkbox"
    },
    {
        question: `Hadoop分布式文件系统的客户端端上传文件的时候，下列哪项正确？	<br>A.数据经过 NameNode 传递给 DataNode。	<br>B.Client 端将文件切分为 Block，依次上传。	<br>C.Client 只上传数据到一台 DataNode，然后由 NameNode 负责 Block 复制工作。	<br>D.以上都不正确`, answer: "B"
    },
    {
        question: `FTP采集在被动模式下，当开启一个 FTP 连接时，提交 PASV 命令。服务器会开启一个任意的端口返回如“227 entering passive mode (127,0,0,1,40,18)”。则服务器上有哪一个端口被开放（  ）。	<br>A.418	<br>B.4018	<br>C.10258	<br>D.40978`, answer: "C"
    },
    {
        question: `Kafka分布式消息集群中是怎么体现消息顺序性，下列哪项正确？	<br>A.每个分区内，每条消息都有一个offset，故只能保证分区内有序。	<br>B.每个主题内，每条消息都有一个offset，故只能保证分区内有序。	<br>C.每个节点内，每条消息都有一个offset，故只能保证分区内有序。	<br>D.以上都不正确`, answer: "A"
    },
    {
        question: `当使用mount镜像设备或文件系统挂载的时候，需要用到的设备名称位于（ ）目录。	<br>A./home	<br>B./bin	<br>C./etc	<br>D./dev`, answer: "D"
    },
    {
        question: `在实验集群的master节点使用jps命令查看进程时，终端出现以下哪项能说明Hadoop主节点启动成功？	<br>A.Namenode,JobTracker, secondaryNameNode	<br>B.Namenode,Datanode, Hmaster	<br>C.Namenode,Datanode, secondaryNameNode	<br>D.Namenode,Datanode, TaskTracker `, answer: "D"
    },
    {
        question: `ftp协议命令中，不属于控制端口的命令是（  ）。	<br>A.cd	<br>B.pwd	<br>C.ls	<br>D.help`, answer: "C"
    },
    {
        question: `Cookie 存储了客户端的一些重要信息，例如身份标识、所在地区等，通常是一个文本文件。在向服务器发送 URL 请求时，可以将文件内容读出，附加在 HTTP 的请求头中，可以免去用户输入信息的麻烦。	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `从一个空FIFO中读取数据是会发生阻塞，但从给一个空PIPE中读取数据时不会发生阻塞。	<br>A.对	<br>B.错`, answer: "B"
    },
    {
        question: `kafka消费者在某分区内消费消息数据操作顺序是先提交offset，后消费，有可能造成数据的重复。	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `在计算中存储数据最小单位是字节。	<br>A.对	<br>B.错`, answer: "B"
    },
    {
        question: `各个设备工作在哪个层，正确说法包括（  ）。	<br>A.网卡工作在OSI参考模型的网络层。	"<br>B.集线器HUB工作在OSI参考模型的物理层。
    "	"<br>C.交换机Switch工作在OSI参考模型的数据链路层。
    "	"<br>D.路由器Router工作在OSI参考模型的网络层。
    `, answer: ["B", "C", "D"], type: "checkbox"
    },
    {
        question: `动态网页采集技术类型包括（  ）。	<br>A.构造带参数的 URL，利用参数传递动态请求。	<br>B.构造 Cookie 携带参数，利用 HTTP 头部传递动态请求的参数。	<br>C.离线分析 Ajax 的动态请求，使用静态页面采集技术。	<br>D.模拟浏览器技术。`, answer: ["A", "B", "C", "D"], type: "checkbox"
    },
    {
        question: `某五星级酒店公开招标建设一套“无线网络”系统，以满足商务客人在酒店范围内随时随地高速访问Internet的需要。该项目最适合采用的无线网络技术是（）	<br>A.WiFi	<br>B.Bluetooth	<br>C.BlueRay	<br>D.GPRS`, answer: "A"
    },
    {
        question: `某云计算服务商向电信运营商提供计算能力、存储空间及相应的运营管理服务。按照云计算服务提供的资源层次，该服务类型属于（）	<br>A.IaaS	<br>B.CaaS	<br>C.PaaS	<br>D.SaaS`, answer: "A"
    },
    {
        question: `如果未经授权的实体得到了数据的访问权，这属于破坏了信息的（  ）	<br>A.可用性	<br>B.完整性	<br>C.机密性	<br>D.可控性`, answer: "C"
    },
    {
        question: `以下选项中,不属于生物识别方法的是（）	<br>A.掌纹识别	<br>B.个人标记号识别	<br>C.人脸识别	<br>D.指纹识别`, answer: "B"
    },
    {
        question: `电子政务类型中，属于政府对公众的是（）。	<br>A.G2B	<br>B.G2E	<br>C.G2G	<br>D.G2C`, answer: "D"
    },
    {
        question: `路由器工作在（），通过逻辑地址进行网络之间的信息转发。	<br>A.物理层	<br>B.数据链路层	<br>C.传输层	<br>D.网络层`, answer: "D"
    },
    {
        question: `小王用智能手环来督促自己每天走路10000步，这是将（）应用到移动互联网中，为用户提供智能化服务。	<br>A.用户画像	<br>B.传感技术	<br>C.数据挖掘	<br>D.射频识别`, answer: "B"
    },
    {
        question: `关于TCP和UDP的说法，（）是错误。	<br>A.TCP和UDP都是传输层的协议       	<br>B..TCP是面向连接的传输协议	<br>C.UDP是可靠的传输协议       	<br>D.TCP和UDP都是以IP协议为基础`, answer: "C"
    },
    {
        question: `一个设计良好的软件系统应具有（ ）特征。	<br>A.低内聚、低耦合      	<br>B.高内聚、低耦合	<br>C.高内聚、高耦合    	<br>D.低内聚、高耦合`, answer: "B"
    },
    {
        question: `数据仓库解决方案常常用来实现（ ）。	<br>A.两个或者多个信息系统之间相互访问数据资源	<br>B.企业海量数据的存储和访问	<br>C.企业决策信息  挖掘和提取	<br>D.不同地域企业信息系统之间进行实时的信息共享和数据通信`, answer: "C"
    },
    {
        question: `商业智能（BI）的核心技术是逐渐成熟的数据仓库(DW)和（ ）。	<br>A.联机呼叫技术         	<br>B.数据整理（ODS）技术	<br>C.联机事务处理（OLTP）技术    	<br>D.数据挖掘（DM）技术`, answer: "D"
    },
    {
        question: `1、关于大数据特点的描述，正确的是（ABD）。	<br>A.数据体量巨大	<br>B.  数据处理速度快 	<br>C.  数据价值密度高	<br>D. 数据真实    `, answer: ["A", "B", "D"], type: "checkbox"
    },
    {
        question: `在信息系统中，信息的处理包括信息的输入，信息的删除，信息的修改和信息的统计。	<br>A.对	<br>B.错`, answer: "B"
    },
    {
        question: `电子商务涉及信息技术、金融、法律和市场等众多领域。	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `电子钱包是电子商务购物活动中的一种支付工具 。	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `ipv6 的IP地址的长度为64	<br>A.对	<br>B.错`, answer: "B"
    },
    {
        question: `当前大数据技术的基础是由（ ）首先提出的	<br>A.微软	<br>B.百度	<br>C.谷歌	<br>D.阿里巴巴`, answer: "C"
    },
    {
        question: `大数据的起源是（）	<br>A.金融	<br>B.电信	<br>C.互联网	<br>D.公共管理`, answer: "C"
    },
    {
        question: `根据不同的业务需求来建立数据模型，抽取最有意义的向量，决定选取哪种方法的数据分析角色人员是（ ）	<br>A.数据管理人员	<br>B.数据分析员	<br>C.研究科学家	<br>D.软件开发工程师`, answer: "C"
    },
    {
        question: `（ ）反映数据的精细化程度，越细化的数据，价值越高	<br>A.规模	<br>B.活性	<br>C.关联度	<br>D.颗粒度`, answer: "D"
    },
    {
        question: `数据清洗的方法不包括（ ）。	<br>A.缺失值处理	<br>B.B：噪声数据清除	<br>C.重复数据记录处理	<br>D.一致性检查`, answer: "C"
    },
    {
        question: ` 智能健康手环的应用开发，体现了（ ）的数据采集技术的应用。	<br>A.统计报表	<br>B.网络爬虫	<br>C.API接口	<br>D.传感器`, answer: "D"
    },
    {
        question: `下列关于数据重组的说法中，错误的是（）。	<br>A.数据重组是数据的重新生产和重新采集	"<br>B.数据重组能够使数据焕发新的光芒
    
    "	<br>C.数据重组实现的关键在于多源数据融合和数据集成	<br>D.数据重组有利于实现新颖的数据模式创新`, answer: "A"
    },
    {
        question: `智慧城市的构建，不包含（ ）。	<br>A.数字城市	<br>B.物联网	<br>C.联网监控	"<br>D.云计算`, answer: "C"
    },
    {
        question: `大数据的最显著特征是（ ）。	<br>A.数据规模大	<br>B.数据类型多样 	<br>C.数据处理速度快	<br>D.数据价值密度高`, answer: "A"
    },
    {
        question: `美国海军军官莫里通过对前人航海日志的分析，绘制了新的航海路线图，标明了大风与洋流可能发生的地点。这体现了大数据分析理念中的（ ）。	<br>A.在数据基础上倾向于全体数据而不是抽样数据<br>B.在分析方法上更注重相关分析而不是因果分析    <br>C.在分析效果上更追究效率而不是绝对精确  <br>D.在数据规模上强调相对数据而不是绝对数据`, answer: "B"
    },
    {
        question: `下列关于舍恩伯格对大数据特点的说法中，错误的是（）。 	<br>A.数据规模大	<br>B.B：数据类型多样 	<br>C.C：数据处理速度快	<br>D. D：数据价值密度高`, answer: "D"
    },
    {
        question: `当前社会中，最为突出的大数据环境是（）。	<br>A.　A：互联网	<br>B.B：物联网	<br>C. C：综合国力	<br>D. D：自然资源`, answer: "A"
    },
    {
        question: `在数据生命周期管理实践中，（ ）是执行方法。	<br>A.A：数据存储和备份规范	<br>B.B：数据管理和维护	<br>C.　C：数据价值发觉和利用 	<br>D.D：数据应用开发和管理`, answer: "B"
    },
    { question: `下列关于网络用户行为的说法中，错误的是（）。 <br>A.　A：网络公司能够捕捉到用户在其网站上的所有行为<br>B.　B：用户离散的交互痕迹能够为企业提升服务质量提供参考   <br>C.　　C：数字轨迹用完即自动删除 <br>D.　D：用户的隐私安全很难得以规范保护`, answer: "C" },
    {
        question: `下列关于计算机存储容量单位的说法中，错误的是（ ）。 	<br>A.A：1KB＜1MB＜1GB	<br>B.B：基本单位是字节（Byte）	<br>C.C：一个汉字需要一个字节的存储空间	<br>D. D：一个字节能够容纳一个英文字符`, answer: "C"
    },
    { question: `下列关于聚类挖掘技术的说法中，错误的是（ ）。	<br>A.A：不预先设定数据归类类目，完全根据数据本身性质将数据聚合成不同类别   <br>B.　　B：要求同类数据的内容相似度尽可能小	<br>C.　C：要求不同类数据的内容相似度尽可能小   <br>D.D：与分类挖掘技术相似的是，都是要对数据进行分类处理`, answer: "B" },
    {
        question: `以下关于大数据的叙述中，哪一项是不恰当的？	<br>A.大数据是仅靠现有数据库管理工具或传统数据处理系统很难处理的大型而复杂的数据集	<br>B.大数据具有数据体量巨大、数据类型繁多、处理速度快等特性	<br>C.大数据的战略意义是实现数据的增值	<br>D.大数据研究中，数据之间的因果关系比关联关系更重要`, answer: "D"
    },
    {
        question: `关于大数据的叙述中，不正确的是：（）	<br>A.大数据的4个特点是体量大，多样性，价值密度低和快速化	<br>B.数据分析与挖掘技术是大数据特有的技术	<br>C.大数据在电商、电信、金融等行业都有巨大的社会价值和产业空间	<br>D.分布式文件系统能提供高吞吐量数据访问，适合在大规模数据集上应用`, answer: "B"
    },
    {
        question: `关于大数据的描述，不正确的是（ ）。	<br>A.大数据分析相比传统的数据仓库应用，具有查询及分析简单的特点	<br>B.大数据的意义不在于掌握庞大的数据信息，而在于对这些数据进行专业化的处理	<br>C.大数据主要依托云计算的分布式处理、分布式数据库和云存储、虚拟化技术	<br>D.大数据具有类型繁多、结构化多样、处理速度快、时效性强的特点`, answer: "A"
    },
    {
        question: `大数据具有的特点包括：大量(Volume) 、高速(Velocity) ① 可验证(Verifiable) ②真实性(Veracity) ③多样(Vahcty) ④价值(Value)	<br>A.①③④	<br>B.②③④	<br>C.①②④	<br>D.①②③`, answer: "B"
    },
    {
        question: `以下哪个选项是目前利用大数据分析技术无法进行有效支持的?（）	<br>A.新型病毒的分析判断	<br>B.天气情况预测	<br>C.个人消费习惯分析及预测	<br>D. 精确预测股票价格`, answer: "D"
    },
    {
        question: `关于大数据和数据仓库技术的描述，不正确的是（）。	<br>A.数据仓库是一个面向主题的、集成的、相对稳定的、反映历史变化的数据集合，用于支持管理决策	<br>B.企业数据仓库的建设是以现有企业业务系统和大量业务数据的积累为基础的，数据仓库一般不支持异构数据的集成	<br>C.大数据分析相比传统的数据仓库应用，其数据量更大，查询分析复杂，且在技术上须依托于分布式，云存储，虚拟化等技术	<br>D.数据仓库的结构通常包含数据源、数据集市、数据分析服务器和前端工具的4个层次`, answer: "B"
    },
    {
        question: `当前社会中，最为突出的大数据环境是（）。	<br>A.互联网	<br>B.物联网	<br>C.综合国力	<br>D.自然资源`, answer: "A"
    },
    {
        question: `与大数据密切相关的技术是（）	<br>A.云计算	<br>B.蓝牙	<br>C.wifi	<br>D.博弈论`, answer: "A"
    },
    {
        question: `在大数据的关键技术中，数据抽取工具ETL是（）过程主要使用的技术。	<br>A.数据采集	<br>B.数据存储	<br>C.数据清洗	<br>D.数据分析`, answer: "A"
    },
    {
        question: `下列关于脏数据的说法中，正确的是( )。	<br>A.格式不规范  	<br>B.编码不统一  	<br>C.意义不明确  	<br>D.与实际业务关系不大  `, answer: ["A", "B", "C", "D"], type: "checkbox"
    },
    {
        question: `传统数据密集型行业积极探索和布局大数据应用的表现是( )。	<br>A.投资入股互联网电商行业  	<br>B.打通多源跨域数据  	<br>C.提高分析挖掘能力  	<br>D.自行开发数据产品  `, answer: ["B", "C"], type: "checkbox"
    },
    {
        question: `下列关于大数据的说法中，错误的是()。	<br>A.大数据具有体量大、结构单一、时效性强的特征  	<br>B.处理大数据需采用新型计算架构和智能算法等新技术  	<br>C.大数据的应用注重相关分析而不是因果分析  	<br>D.大数据的应用注重因果分析而不是相关分析  `, answer: ["A", "D"], type: "checkbox"
    },
    {
        question: `以下哪项是互联网思维的内容( )	<br>A.患者思维 	<br>B.用户思维 	<br>C.极致思维 	<br>D.大数据思维 `, answer: ["B", "C", "D"], type: "checkbox"
    },
    {
        question: `下列关于数据交易市场的说法中，正确的是( )。	<br>A.数据交易市场是大数据产业发展到一定程度的产物   	<br>B.商业化的数据交易活动催生了多方参与的第三方数据交易市场 	<br>C.数据交易市场通过生产数据、研发和分析数据，为数据交易提供帮助  	<br>D.数据交易市场是大数据资源化的必然产物`, answer: ["A", "B", "D"], type: "checkbox"
    },
    {
        question: `大数据产业发展的特点是（ ）	<br>A.规模较大	<br>B.规模较小 	<br>C.增速很快	<br>D.增速缓慢`, answer: ["A", "C"], type: "checkbox"
    },
    {
        question: `智慧城市是智能化的数字城市，是数字城市功能的一种延伸、拓展和升华，它通过物联网把物理城市与数字城市无缝连接起来，利用云计算技术对实时感知的大数据进行处理并提供智能化服务。	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `啤酒与尿布的经典案例，充分体现了实验思维在大数据分析理念中的重要性。	<br>A.对	<br>B.错`, answer: "B"
    },
    {
        question: `对于企业来说，给用户进行各种促销或者实施运营策略的时机也比较重要，而且对不同兴趣偏好的用户最好集中处理。	<br>A.对	<br>B.错`, answer: "B"
    },
    {
        question: `对于大数据而言，最基本、最重要的要求就是减少错误、保证质量。因此，大数据收集的信息量要尽量精确。	<br>A.对	<br>B.错`, answer: "B"
    },
    {
        question: `具备很强的报告撰写能力，可以把分析结果通过文字、图表、可视化等多种方式清晰地展现出来，能够清楚地论述分析结果及可能产生的影响，从而说服决策者信服并采纳其建议，是数据分析能力对大数据人才的基本要求。	<br>A.对	<br>B.错`, answer: "B"
    },
    {
        question: `谷歌流感趋势充分体现了数据重组和扩展对数据价值的重要意义。	<br>A.对	<br>B.错`, answer: "B"
    },
    {
        question: `决策树是一种基于树形结构的预测模型，每一个树形分叉代表一个分类条件，叶子节点代表最终的分类结果，其优点在于易于实现，决策时间短，并且适合处理非数值型数据。	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `对于企业来说，给用户进行各种促销或者实施运营策略的时机也比较重要，而且对不同兴趣偏好的用户最好集中处理。	<br>A.对	<br>B.错`, answer: "B"
    },
    {
        question: `信息生命周期管理是据生命周期管理的来源，最早由英国企业提出。	<br>A.对	<br>B.错`, answer: "B"
    },
    {
        question: `简单随机抽样，是从总体N个对象中任意抽取n个对象作为样本，最终以这些样本作为调查对象。在抽取样本时，总体中每个对象被抽中为调查样本的概率可能会有差异。	<br>A.对	<br>B.错`, answer: "B"
    },
    {
        question: `在噪声数据中，波动数据比离群点数据偏离整体水平更大。	<br>A.对	<br>B.错`, answer: "B"
    },
    {
        question: `相比依赖于小数据和精确性的时代，大数据因为更强调数据的（），帮助我们进一步接近事实的真相。	<br>A.安全性	<br>B.完整性和混杂性	<br>C.完整性	<br>D.混杂性`, answer: "B"
    },
    {
        question: `以下哪种方法不属于特征选择的标准方法？（）	<br>A.抽样	<br>B.嵌入	<br>C.过滤	<br>D.包装`, answer: "A"
    },
    {
        question: `数据清洗的方法不包括（）	<br>A.缺失数据处理	<br>B.噪声数据清楚	<br>C.数据一致性检查	<br>D.数据可视化`, answer: "D"
    },
    {
        question: `以下哪个值可以描述集中趋势?()	<br>A.均值	<br>B.方差	<br>C.标准差	<br>D.四分位数`, answer: "A"
    },
    {
        question: `用户画像的作用不包括（）	<br>A.精准营销	<br>B.标签准备	<br>C.数据挖掘	<br>D.降低服务质量`, answer: "D"
    },
    {
        question: `从大量数据中提取知识的过程通常称为	<br>A.数据挖掘	<br>B.数据清洗	<br>C.人工智能	<br>D.数据仓库`, answer: "A"
    },
    {
        question: `一个活动页面被浏览了是5000次，其中去重后的ip数是500个，那么该页面的pv是多少？（）	<br>A.500	<br>B.5000	<br>C.1000	<br>D.5500`, answer: "B"
    },
    {
        question: `下列关于数据交易市场的说法中错误的是（）	<br>A.数据交易市场是大数据产业发展到一定程度的产物。	<br>B.商业化的数据交易活动，催生了多方参与的第三方数据交易市场。	<br>C.数据交易市场通过生产数据、研发和分析数据，为数据交易提供帮助。	<br>D.数据交易市场是大数据资源化的必然产物。`, answer: "C"
    },
    {
        question: `下列论据中，能够支撑“大数据无所不能”的观点的是（）	<br>A.互联网金融打破了传统的观念和行为	<br>B.大数据存在泡沫	<br>C.大数据具有非常高的成本	<br>D.个人隐私泄露与信息安全担忧`, answer: "A"
    },
    {
        question: `不属于网络运营者加强个人信息保护的措施是（）	<br>A.分类	<br>B.备份	<br>C.加密	<br>D.共享`, answer: "D"
    },
    {
        question: `大数据不少要教机器像人一样思考，相反，它是（）	<br>A.把数据算法运用到海量的数据上来分析事情发生的可能性	<br>B.预测与惩罚	<br>C.被视为人工智能的一部分	<br>D.被视为一种机器学习`, answer: "A"
    },
    {
        question: `用数据的方式来定位产品运营策略应该以什么为导向？（）	<br>A.客户	<br>B.销售	<br>C.利润	<br>D.数据`, answer: "C"
    },
    {
        question: `下列关于用户“标签”的说法错误的是？（）	<br>A.构建客户画像的核心工作	<br>B.通过对客户信息分析而来的	<br>C.高度精炼的特征标志	<br>D.随便给客户起外号`, answer: "D"
    },
    {
        question: `活动促销的本质是（）	<br>A.免单	<br>B.秒杀	<br>C.折扣	<br>D.销售`, answer: "D"
    },
    {
        question: `下列哪项是通过地理位置可以分析出来的信息（）	<br>A.家庭住址	<br>B.工作地点	<br>C.颜值	<br>D.体重`, answer: "B"
    },
    {
        question: `对于大型、中等、小型规模的公司而言，大数据对中等规模的公司帮助最大。	<br>A.对	<br>B.错`, answer: "B"
    },
    {
        question: `接到临时数据需求第一步是写SQL脚本	<br>A.对	<br>B.错`, answer: "B"
    },
    {
        question: `在数据挖掘算法的选择上，按照算法准确率最高进行选择	<br>A.对	<br>B.错`, answer: "B"
    },
    {
        question: `ARPPU是只每付费用户平均收益	<br>A.对	<br>B.错`, answer: "B"
    },
    {
        question: `对于大数据而言，最基本最重要的要求就是减少错误，保证质量，因此大数据收集的信息量要尽量精确。	<br>A.对	<br>B.错`, answer: "B"
    },
    {
        question: `大数据产业发展具有规模较大、增速很快、多产业交叉融合等特点。	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `数据再利用的意义在于挖掘数据的潜在价值	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `网络运营者以经营为目的收集重要数据或个人敏感信息的，应当明确数据安全责任人。	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `数据化就是数字化，是相互等同的关系。	<br>A.对	<br>B.错`, answer: "B"
    },
    {
        question: `网络运营者可以以改善服务质量为由通过默认授权的形式采集个人信息。	<br>A.对	<br>B.错`, answer: "B"
    },
    {
        question: `大数据的特征包括	<br>A.容量大	<br>B.速度快	<br>C.多样性	<br>D.价值高`, answer: ["A", "B", "C", "D"], type: "checkbox"
    },
    {
        question: `下列哪些要素属于场景梳理中需要涉及的？（）	<br>A.当前问题	<br>B.期望目标	<br>C.解决思路	<br>D.可执行的验证标准`, answer: ["A", "B", "C", "D"], type: "checkbox"
    },
    {
        question: `常用的长期趋势分析方法有（）	<br>A.回归方程法	<br>B.移动平均法	<br>C.指数平滑法	<br>D.相关分析法`, answer: ["A", "B", "C"], type: "checkbox"
    },
    {
        question: `以下哪些是位置类大数据的应用场景？（）	<br>A.区域安全	<br>B.城市规划	<br>C.智慧旅游	<br>D.商铺选址`, answer: ["A", "B", "C", "D"], type: "checkbox"
    },
    {
        question: `以下哪些不是属于用户标识？（）	<br>A.IMEI	<br>B.cookie	<br>C.经纬度	<br>D.年龄`, answer: ["C", "D"], type: "checkbox"
    },
    {
        question: `下面哪种不属于数据预处理的方法？（）	<br>A.变量代换	<br>B.离散化	<br>C.聚集	<br>D.估计遗漏值`, answer: "D"
    },
    {
        question: `当不知道数据所带标签时，可以使用哪种技术促使带同类标签的数据和带其他标签的数据分离	<br>A.分类	<br>B.聚类	<br>C.关联分析	<br>D.马尔科夫链`, answer: "B"
    },
    {
        question: `在抽样方法中，当合适的样本容量很难确定时，可以使用的抽样方法是（）	<br>A.有放回的简单随机抽样 	<br>B.无放回的简单随机抽样 	<br>C.分层抽样	<br>D.渐进抽样`, answer: "D"
    },
    {
        question: `通过调查发现，亚马逊一些“冷门”书籍的销售比例正以高速成长，预估未来可占整个书市的一半，从此使冷门不再冷门。这说明的是运营中的（ ）	<br>A.数据驱动	<br>B.长尾理论	<br>C.需求驱动	<br>D.梅特卡菲定律`, answer: "B"
    },
    {
        question: `以下哪个指标可以评估用户粘性	<br>A.留存数据	<br>B.当天活跃数据	<br>C.当天收入数据	<br>D.新增用户数据`, answer: "A"
    },
    {
        question: `数据的状态是如何变化的？（）	<br>A.数据-知识-信息-智慧-赋能	<br>B.数据-信息-知识-智慧-赋能	<br>C.数据-信息-赋能-知识-智慧	<br>D.信息-数据-知识-智慧-赋能`, answer: "B"
    },
    {
        question: `市场拓展的落脚点是对用户行为的分析	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `数据存储使用的数据库类型会影响数据分析结果的准确性	<br>A.对	<br>B.错`, answer: "B"
    },
    {
        question: `数据粒度是指数据仓库小数据单元的详细程度和级别	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `网络运营者应当参照国家有关标准，采用数据分类、备份、加密等措施加强对个人信息和重要数据保护。	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `网络运营者向他人提供个人信息前，应当评估可能带来的安全风险，并征得个人信息主体同意。下列情况除外（）	<br>A.从合法公开渠道收集且不明显违背个人信息主体意愿	<br>B.个人信息主体主动公开。	<br>C.经过匿名化处理。	<br>D.执法机关依法履行职责所必需`, answer: "ABCDE"
    },
    {
        question: `以下哪些会影响数据结果的准确性？（）	<br>A.口径的合理及统一	<br>B.适当的建模方法	<br>C.数据的完整性	<br>D.存储使用的数据库类型`, answer: ["A", "B", "C"], type: "checkbox"
    },
    {
        question: `以下关于数据仓库的叙述中，正确的是（ ）	<br>A.数据仓库主要用于支持决策管理	<br>B.数据仓库的数据源相对比较单一	<br>C.存放在数据仓库中的数据一般是实时更新的	<br>D.数据仓库为企业的特定应用服务、强调处理的响应时间，数据的安全性和完整性等`, answer: "A"
    },
    {
        question: `企业中对含义不一致的信息进行纠正操作，叫做（  ）	<br>A.数据清洗	<br>B.数据冗余	<br>C.数据降维	<br>D.数据转置`, answer: "A"
    },
    {
        question: `哪个 SQL 关键词用于对结果集进行排序？（  ）。	<br>A.ORDER	<br>B.SORT BY	<br>C.SORT	<br>D.ORDER BY`, answer: "D"
    },
    {
        question: `客户关系图表属于下列那种模型的范畴？（  ）	<br>A.概念模型	<br>B.物理模型	<br>C.逻辑模型	<br>D.Odoo模型`, answer: "B"
    },
    {
        question: `通过 SQL，如何返回 "Customer" 表中记录的数目？（  ）	<br>A.SELECT COLUMNS() FROM Customer	<br>B.SELECT COLUMNS(*) FROM Customer	<br>C.SELECT COUNT() FROM Customer	<br>D.SELECT COUNT(*) FROM Customer`, answer: "D"
    },
    {
        question: `SQL语言允许使用通配符进行字符串匹配的操作，其中‘%’可以表示（  ）	<br>A.零个字符	<br>B.1个字符	<br>C.多个字符	<br>D.以上都是`, answer: "D"
    },
    {
        question: `下面哪个选项为事实表数据？（  ）	<br>A.货物出售记录	<br>B.时间	<br>C.售货员	<br>D.商品`, answer: "A"
    },
    {
        question: `通过 SQL，如何从 "CUST" 表中选取 "CUST_NM" 列？（  ）	<br>A.SELECT CUST.CUST_NM	<br>B.SELECT CUST_NM FROM CUST	<br>C.EXTRACT CUST_NM FROM CUST	<br>D.以上都不对`, answer: "B"
    },
    {
        question: `哪条 SQL 语句可返回唯一不同的值？（  ）	<br>A.SELECT DIFFERENT	<br>B.SELECT DISTINCT	<br>C.SELECT UNIQUE	<br>D.SELECT PRIMARY`, answer: "B"
    },
    {
        question: `在关系表中，下列哪种属性不能承担主列关键字？（  ）	<br>A.身份证号	<br>B.银行卡号	<br>C.加密电文	<br>D.企业标识码`, answer: "C"
    },
    {
        question: `数据表的多维索引作用是（  ）	<br>A.使数据表更节省存储空间	<br>B.加快数据存储速度	<br>C.表格格式美观大方	<br>D.加快数据查找效率`, answer: "D"
    },
    {
        question: `通过 SQL，如何从 "Customer" 表中选取所有的列（  ）	<br>A.SELECT [all] FROM Customer	<br>B.SELECT Customer	<br>C.SELECT * FROM Customer	<br>D.SELECT *.Customer`, answer: "C"
    },
    {
        question: `数据处理中，基本不可分割的逻辑单位是（  ）	<br>A.数据项	<br>B.记录	<br>C.文件	<br>D.数据库`, answer: "A"
    },
    {
        question: `通过 SQL，您如何在 ""Customer"" 表中删除 ""FirstName"" 等于 ""Fred"" 的纪录？（  ） <br>A.DELETE FROM Customer WHERE FirstName = 'Fred'	<br>B.DELETE FirstName='Fred' FROM Customer	<br>C.DELETE ROW FirstName='Fred' FROM Customer <br>D.以上都不对`, answer: "A"
    },
    {
        question: `大数据时代，下列说法正确的是（  ）。	<br>A.收集数据很简单	<br>B.数据是最核心的部分	<br>C.对数据的分析技术和技能是最重要的	<br>D.数据非常重要，一定要很好的保护起来，防止泄露`, answer: "B"
    },
    {
        question: `UNION ALL 对两个结果集进行并集操作, 不包括重复行,相当于distinct, 同时进行默认规则的排序	<br>A.对	<br>B.错`, answer: "B"
    },
    {
        question: `索引只能建在数据表的一列上	<br>A.对	<br>B.错`, answer: "B"
    },
    {
        question: `视图是在基本表之上建立的表，也占用物理空间	<br>A.对	<br>B.错`, answer: "B"
    },
    {
        question: `使用数据仓库可以解决数据孤岛	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `联机事务处理（OLTP）是决策支持系统的有机组成部分，利用存储在数据仓库中的数据完成各种分析，并以直观易懂的形式将分析结果返回给决策分析人员	<br>A.对	<br>B.错`, answer: "B"
    },
    {
        question: `当所列出的某个条件为 true 时，OR 运算符会显示记录。当列出的所有条件为 true 时，AND 运算符会显示记录	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `查询不及格的课程，并按课程号从大到小排列，脚本为：SELECT cid,sid FROM SC WHERE score <60 ORDER BY cid; 其中cid为课程号，sid为学号	<br>A.对	<br>B.错`, answer: "B"
    },
    {
        question: `对缺失的数据值进行处理，是数据清洗的一种方法	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `下面脚本是正确的：
    select *
    from Customer
    where FirstName like ('%DAVI%','MOSTEL%'，'ABC')	<br>A.对	<br>B.错`, answer: "B"
    },
    {
        question: `数据用于基本用途的价值会减少，但潜在价值依然强大	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `表与表之间常用的关联方式包括（  ）。	<br>A.内关联	<br>B.左关联	<br>C.右关联	<br>D.左右关联`, answer: ["A", "B", "C"], type: "checkbox"
    },
    {
        question: `数据仓库的特点有哪些？	<br>A.面向主题	<br>B.集成的	<br>C.相对稳定的	<br>D.反应历史变化的`, answer: ["A", "B", "C", "D"], type: "checkbox"
    },
    {
        question: `查询Score表中成绩为85，86或88的记录	<br>A.SELECT * FROM SCORE
    WHERE DEGREE >=85 and DEGREE<=88;   <br>B.SELECT * FROM SCORE
    WHERE DEGREE=85 OR DEGREE=86 OR DEGREE=88;  <br>C.
    SELECT * FROM SCORE
    WHERE DEGREE BETWEEN 85 AND 88; <br>D.SELECT * FROM SCORE
    WHERE DEGREE IN (85,86,88);
    `, answer: ["B", "D"], type: "checkbox"
    },
    {
        question: `以下哪些函数是聚集函数（  ）。	<br>A.count	<br>B.max	<br>C.sum	<br>D.row_number`, answer: ["A", "B", "C"], type: "checkbox"
    },
    {
        question: `数据仓库的设计步骤包含哪些？	<br>A.概念模型设计	<br>B.技术准备工作	<br>C.逻辑模型设计	<br>D.物理模型设计`, answer: ["A", "B", "C", "D"], type: "checkbox"
    },
    {
        question: `上海男性互联网从业人数，该指标包含的维度数据不包含（  ）	<br>A.城市	<br>B.性别	<br>C.行业	<br>D.从业人数`, answer: "D"
    },
    {
        question: `查询最低分大于70，最高分小于90的Sno列，下列脚本正确的是（  ）	<br>A.SELECT SNO FROM SCORE
    GROUP BY SNO
    WHERE
    MAX(DEGREE)<90 AND MIN(DEGREE)>70;  <br>B.SELECT SNO FROM SCORE
    GROUP BY SNO
    HAVING MAX(DEGREE)<90 AND MIN(DEGREE)>70;   <br>C.SELECT SNO FROM SCORE
    WHERE DEGREE<90 AND DEGREE>70
    GROUP BY SNO
    ORDER BY DEGREE
    ;   <br>D.SELECT SNO
    FROM SCORE
    GROUP BY SNO
    ORDER BY MAX(DEGREE)<90 AND MIN(DEGREE)>70;`, answer: "B"
    },
    {
        question: `多维报表是指（  ）	<br>A.在多个维度上观察全员操作	<br>B.不同维度格式不同叠加展示	<br>C.旋转数据集的部分维度	<br>D.在线分析或联机分析`, answer: "B"
    },
    {
        question: `查询姓“李”的老师的个数，脚本可以为（   ）	<br>A.SELECT COUNT(TEACHER.TID)FROM TEACHER WHERE TEACHER.TNAME LIKE'李%'	<br>B.SELECT COUNT(TEACHER.TID)FROM TEACHER WHERE TEACHER.TNAME LIKE'%李%'	<br>C.SELECT COUNT(TEACHER.TID)FROM TEACHER WHERE TEACHER.TNAME LIKE'%李%' GROUP BY TEACHER.TNAME	<br>D.SELECT COUNT(TEACHER.TID)FROM TEACHER WHERE TEACHER.TNAME LIKE'李%' GROUP BY TEACHER.TNAME`, answer: "A"
    },
    {
        question: `数据仓库的最终目的是	<br>A.收集业务需求	<br>B.建立数据仓库逻辑模型	<br>C.开发数据仓库的应用分析	<br>D.为用户和业务部门提供决策支持`, answer: "D"
    },
    {
        question: `支撑大数据业务的基础是	<br>A.数据科学	<br>B.数据应用	<br>C.数据硬件	<br>D.数据人才`, answer: "B"
    },
    {
        question: `客户电话属于度量	<br>A.对	<br>B.错`, answer: "B"
    },
    {
        question: `元数据是数据的数据	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `维度表一般是有主键的	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `group  by 的字段可以不出现在SELECT中展示	<br>A.对	<br>B.错`, answer: "B"
    },
    {
        question: `多维分析包含哪些操作？	<br>A.切片	<br>B.切块	<br>C.钻取	<br>D.旋转`, answer: ["A", "B", "C", "D"], type: "checkbox"
    },
    {
        question: `查询和“李军”同性别的所有同学的Sname（假设只有一个叫李军的），下列sql脚本正确的是（  ）。	<br>A.SELECT SNAME FROM STUDENT
    WHERE SSEX=(SELECT SSEX FROM STUDENT           WHERE SNAME='李军');
    <br>B.SELECT A.SNAME
    FROM STUDENT AS A, STUDENT AS B
    WHERE A.SSEX=B.SSEX
    AND A.CLASS=B.CLASS
    AND B.SNAME='李军';<br>C.SELECT A.SNAME
    FROM STUDENT AS A, STUDENT AS B
    WHERE A.SSEX=B.SSEX
    AND B.SNAME='李军';<br>D.SELECT SNAME FROM STUDENT
    WHERE SSEX in  (SELECT SSEX FROM STUDENT     WHERE SNAME='李军');`, answer: ["A", "C", "D"], type: "checkbox"
    },
    {
        question: `使用留出法进行数据集划分，为了保证数据分布的一致性，通常采用（  ）方法。	<br>A.随机抽样	<br>B.分层抽样	<br>C.系统抽样	<br>D.整群抽样`, answer: "B"
    },
    {
        question: `哪个算法不仅关注同时出现的事件，而且关注事件出现的先后顺序	<br>A.关联规则	<br>B.回归	<br>C.序列	<br>D.聚类`, answer: "C"
    },
    {
        question: `（  ）不适合用于缺失值处理	<br>A.删除	<br>B.替换	<br>C.随机生成	<br>D.插补`, answer: "C"
    },
    {
        question: `标准正态分布也叫（  ）分布	<br>A.高斯	<br>B.泊松	<br>C.伯努利	<br>D.柯西`, answer: "A"
    },
    {
        question: `一般来说，下列哪种方法常用来预测连续独立变量？	<br>A.线性回归	<br>B.逻辑回归	<br>C.线性回归和逻辑回归都行	<br>D.以上说法都不对`, answer: "A"
    },
    {
        question: `以下哪个不是分类算法？	<br>A.决策树	<br>B.朴素贝叶斯	<br>C.K近邻	<br>D.K均值`, answer: "D"
    },
    {
        question: `以下哪项不是自然语言处理NLP的应用	<br>A.机器翻译	<br>B.语音搜索引擎	<br>C.拼写校正	<br>D.图像识别`, answer: "D"
    },
    {
        question: `关于欠拟合（under-fitting），下面哪个说法是正确的？	<br>A.训练误差较大，测试误差较小	<br>B.训练误差较小，测试误差较大	<br>C.训练误差较大，测试误差较大	<br>D.训练误差较小，测试误差较小`, answer: "C"
    },
    {
        question: `深度学习中，RNN是以下哪项的缩写	<br>A.卷积神经网络	<br>B.循环神经网络	<br>C.深度神经网络	<br>D.卷积核`, answer: "B"
    },
    {
        question: `通过聚集多个分类器的预测来提高分类准确率的技术称为	<br>A.集成(ensemble)	<br>B.聚集(aggregate)	<br>C.合并(combination)	<br>D.投票(voting)`, answer: "A"
    },
    {
        question: `分析发现,使用携程APP的用户很大概率也使用了百度地图APP,这属于数据挖掘的哪类应用	<br>A.关联规则	<br>B.聚类	<br>C.分类	<br>D.回归`, answer: "A"
    },
    {
        question: `将原始数据进行集成、变换、维度规约、维度衍生是以下哪项任务	<br>A.数据预处理	<br>B.数据挖掘	<br>C.机器学习	<br>D.知识发现`, answer: "A"
    },
    {
        question: `以下哪种方法不属于特征工程	<br>A.降维	<br>B.生成新特征	<br>C.随机抽样	<br>D.特征选择`, answer: "C"
    },
    {
        question: `某地市公司有10000个基站，希望实施不同的维护策略，但无法确定按哪些指标进行划分更合理，此时可以采用什么方法对这些基站进行分组	<br>A.分类	<br>B.聚类	<br>C.关联规则	<br>D.序列分析`, answer: "B"
    },
    {
        question: `下列哪个不属于神经网络中的层次	<br>A.输入层	<br>B.隐藏层	<br>C.跳转层	<br>D.输出层`, answer: "C"
    },
    {
        question: `数据规范化是将不同变化范围的值映射到相同的固定范围，且该范围只能是[0,1]区间	<br>A.对	<br>B.错`, answer: "B"
    },
    {
        question: `基于树的算法，如随机森林等，不需要做数据归一化	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `数据预处理对数据分析与挖掘至关重要	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `为了评估分类模型的准确性，应该把历史数据分为训练集和测试集	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `分类属于无监督的机器学习算法	<br>A.对	<br>B.错`, answer: "B"
    },
    {
        question: `决策树算法中增加树的深度有助于减少训练时间	<br>A.对	<br>B.错`, answer: "B"
    },
    {
        question: `贝叶斯网络是用来表示一组变量之间为概率关系的图像模型	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `可以为神经网络模型设置多个隐藏层	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `kmeans的基本思想是最小化所有数据到其所属簇中心的距离的平方和	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `当你使用较小的数据集进行机器学习时，容易产生过度拟合，使用较大的数据量能避免过度拟合现象	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `数据挖掘包括以下哪些步骤？	<br>A.商业理解	<br>B.数据理解	<br>C.数据准备	<br>D.数据建模`, answer: "ABCDEF"
    },
    {
        question: `数据预处理包括哪些过程？	<br>A.数据清理	<br>B.数据标准化	<br>C.数据降维	<br>D.数据训练`, answer: ["A", "B", "C"], type: "checkbox"
    },
    {
        question: `特征筛选有哪些好处？	<br>A.缩短模型训练时间	<br>B.解决样本不平衡问题	<br>C.简化模型，避免维度过多产生维度灾难	<br>D.增加模型的可解释性，降低模型的过拟合风险`, answer: ["A", "C", "D"], type: "checkbox"
    },
    {
        question: `以下哪些属于有监督学习	<br>A.求数据的集群	<br>B.语音识别	<br>C.数据降维	<br>D.时间序列预测`, answer: ["B", "D"], type: "checkbox"
    },
    {
        question: `以下哪些是机器学习框架	<br>A.Keras	<br>B.Tensorflow	<br>C.Torch	<br>D.Scikit-learn`, answer: "ABCDEF"
    },
    {
        question: `SVM中的核技巧（Kernal trick）的作用包括以下哪项？	<br>A.特征降维	<br>B.特征升维	<br>C.防止过拟合	<br>D.以上说法都不对`, answer: "C"
    },
    {
        question: `一个公司薪资水平中位数是￥35000，排名25%和75%的薪资分别是￥21000和￥53000，如果某人的薪资是￥1，它可以被看作是异常值吗？	<br>A.可以	<br>B.不可以	<br>C.需要更多的信息来判断	<br>D.以上说法都不对`, answer: "C"
    },
    {
        question: `评估模型之后，得出模型存在偏差，下列哪种方法可能解决这一问题	<br>A.减少模型中特征的数量	<br>B.向模型中增加更多的特征	<br>C.增加更多的数据	<br>D.B 和 C`, answer: "B"
    },
    {
        question: `点击率的预测是一个数据比例不平衡问题（比如训练集中样本呈阴性的比例为99%，阳性的比例是1%），如果我们用这种数据建立模型并使得训练集的准确率高达99%。我们可以得出结论是	<br>A.模型的准确率非常高，我们不需要进一步探索	<br>B.模型不好，我们应建一个更好的模型	<br>C.无法评价模型	<br>D.以上都不正确`, answer: "B"
    },
    {
        question: `SVM（支持向量机）与LR（逻辑回归）的数学本质上的区别是什么	<br>A.损失函数	<br>B.是否有核	<br>C.是否支持多分类	<br>D.其余选项皆错`, answer: "A"
    },
    {
        question: `不属于决策树的特征选择的方法是	<br>A.信息增益率	<br>B.信息增益	<br>C.关联分析	<br>D.基尼`, answer: "C"
    },
    {
        question: `随着模型复杂度的上升，训练误差会逐渐减少，测试误差也会逐渐减少	<br>A.对	<br>B.错`, answer: "B"
    },
    {
        question: `如果两个变量相关，他们一定是线性关系	<br>A.对	<br>B.错`, answer: "B"
    },
    {
        question: `K-均值算法中的K是指算法进行K次迭代	<br>A.对	<br>B.错`, answer: "B"
    },
    {
        question: `学习率决定了下降的步伐大小，下降的步伐大小非常重要，因为如果太小则找到函数最小值的速度就很慢，如果太大，则可能会出现overshoot the minimum的现象	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `衡量数据离散趋势的指标包括	<br>A.极差	<br>B.标准差	<br>C.众数	<br>D.均值`, answer: ["A", "B"], type: "checkbox"
    },
    {
        question: `下列哪些假设是我们推导线性回归参数时遵循的	<br>A.X 与 Y 有线性关系（多项式关系）	<br>B.模型误差在统计学上是独立的	<br>C.误差一般服从 0 均值和固定标准差的正态分布	<br>D.X 是非随机且测量没有误差的`, answer: ["A", "B", "C", "D"], type: "checkbox"
    },
    {
        question: `以下哪些管理规定对信息安全及个人隐私进行了保护（）	<br>A.《互联网行业的自律公约》	<br>B.《治安管理处罚条例》	<br>C.《关于加强网络信息保护的决定》	<br>D.《信息安全保护条例》`, answer: "D"
    },
    {
        question: `大数据科学关注大数据网络发展和运营过程中（）大数据的规律及其与自然和社会活动之间的关系	<br>A.大数据网络发展和运营过程	<br>B.规划建设运营管理	<br>C.规律和验证	<br>D.发现和验证`, answer: "D"
    },
    {
        question: `下列关于大数据的说法，错误的是（）	<br>A.大数据具有体量大，结构单一，时效性强的特征	<br>B.处理大数据需要智能算法等新技术	<br>C.大数据应用注重相关分析	<br>D.大数据应用的目的在于发现新知识合洞察并进行科学决策`, answer: "A"
    },
    {
        question: `在数据生命周期管理实践中（）是执行方法	<br>A.数据存储和备份规范	<br>B.数据管理和维护	<br>C.数据价值发觉和利用	<br>D.数据应用开发和管理`, answer: "B"
    },
    {
        question: `大数据的利用过程是（）	<br>A.采集-统计-清洗-挖掘	<br>B.采集-挖掘-统计-清洗	<br>C.采集-清洗-挖掘-统计	<br>D.采集-清洗-统计-挖掘`, answer: "D"
    },
    {
        question: `Hive中所有的数据都存储在（）中	<br>A.HDFS	<br>B.HIVE客户端本地目录	<br>C.Hadoop集群某个节点	<br>D.临时目录`, answer: "A"
    },
    {
        question: `对于最小粒度的任务，Hive查询的反应时间约为（）	<br>A.几微秒	<br>B.几毫秒	<br>C.几秒	<br>D.几分钟`, answer: "D"
    },
    {
        question: `云计算使得使用信息的存储是一个（）的方式，可以大大节约网络成本	<br>A.密集式	<br>B.分布式	<br>C.单一式	<br>D.密闭式`, answer: "B"
    },
    {
        question: `（）年，部分计算机专家首次提出大数据概念	<br>A.2010	<br>B.2011	<br>C.2001	<br>D.2008`, answer: "D"
    },
    {
        question: `下列关于网络用户行为的说法中，错误的是（）	<br>A.网络功能能否捕捉到网络用户的所有行为	<br>B.用户离散的交互痕迹能否为企业提升服务质量	<br>C.数据轨迹用完即自动删除	<br>D.用户隐私安全很难得到安全保护`, answer: "D"
    },
    {
        question: `当前社会中，最为突出的大数据环境是（）	<br>A.物联网	<br>B.综合国力	<br>C.互联网	<br>D.自然资源`, answer: "C"
    },
    {
        question: `（）反映数据的精细化程度，越细化的数据，价值越高	<br>A.规模	<br>B.活性	<br>C.关联度	<br>D.颗粒度`, answer: "C"
    },
    {
        question: `大数据环境下的隐私骚扰，主要标现为	<br>A.个人信息的被识别和暴露	<br>B.用户画像的生成	<br>C.恶意广告的推送	<br>D.病毒入侵`, answer: "A"
    },
    {
        question: `下列企业中，最有可能成为典型的数据资产动营商的是（）	<br>A.物联网企业	<br>B.互联网企业	<br>C.云计算企业	<br>D.电信运营商`, answer: "D"
    },
    {
        question: `对线下零售而言，做好大数据分析应用的前提是（）	<br>A.增加统计种类	<br>B.扩大营业面积	<br>C.增加数据来源	<br>D.开展优惠促销`, answer: "C"
    },
    {
        question: `对于大数据而言，最基本、最重要的要求就是减少错误，保证数据质量，因此，大数据的采集的信息要尽量精确	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `大数据的价值重在挖掘，而挖掘就是分析	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `物联网的处理技术应用于农业上，可以对动物疾病、植物病虫害，通过传感器进行远程诊断	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `《促进大数据发展行动纲要》指出，要加快政府数据开放共享，推动资源整合，提升治理能力	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `移动互联网实现了人人相连，人物相连，物物相连	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `当前大数据产业发展的特点是规模较大、增速快、多产业融合	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `大数据需要新的处理模式才能具有更强的决策力，洞察发现力和流程优化能力	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `习近平总书记指出，网信事业代表着新的生产力，新的发展方向，可以在践行新发展理念上先行一步	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `数据资产型企业产品线的盈利，主要通过提供收费服务来获取	<br>A.对	<br>B.错`, answer: "B"
    },
    {
        question: `当前，企业提供的大数据解决方案大多基于Hadoop 开源项目	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `大数据中数据的来源包括（）	<br>A.互联网数据	<br>B.实时数据	<br>C.探测数据	<br>D.传感器数据`, answer: ["A", "B", "C", "D"], type: "checkbox"
    },
    {
        question: `建立大数据需要设计一个什么样的大型系统（）	<br>A.能够把应用放在合适的平台上	<br>B.能够开发出相应应用	<br>C.能够存储数据	<br>D.能够处理数据`, answer: ["A", "B", "C", "D"], type: "checkbox"
    },
    {
        question: `国务院《关于印发促进大数据发展行动纲要的通知》，要建立（）的新的管理机制	<br>A.用数据管理	<br>B.用数据创新	<br>C.用数据决策	<br>D.用数据说话`, answer: ["A", "B", "C", "D"], type: "checkbox"
    },
    {
        question: `IBM公司用3个V来描述大数据的三个基本特征，这3V是（）	<br>A.体量	<br>B.规模	<br>C.多样性	<br>D.复杂性`, answer: ["A", "B", "C"], type: "checkbox"
    },
    {
        question: `大数据的价值体现在（）	<br>A.大数据给思维方式带来了冲击	<br>B.大数据为政策制定提供科学论据	<br>C.大数据助力智慧城市提升公共服务水平	<br>D.大数据实现了精准营销`, answer: ["A", "B", "C", "D"], type: "checkbox"
    },
    {
        question: `Hive 查询语言中的算术操作符的返回结果是（）类型的	<br>A.Number	<br>B.Int	<br>C.Bigint	<br>D.String`, answer: "A"
    },
    {
        question: `按粒度大小的顺序，Hive 数据被组成为:数据库，表格, （）和桶	<br>A.元组	<br>B.栏	<br>C.分割	<br>D.行`, answer: "C"
    },
    {
        question: `Hive查询语言和 SQL的一个不同之处在于（）操作	<br>A.Group By	<br>B.Join	<br>C.Partition	<br>D.Union`, answer: "C"
    },
    {
        question: `MapReduce的Map函数产生很多的（）	<br>A.key	<br>B.value	<br>C.<key,value>	<br>D.Hash`, answer: "C"
    },
    {
        question: `Hive建表语句中partitioned by，clustered by分别表示（）	<br>A.索引，分桶	<br>B.分桶，分区	<br>C.分区，分桶	<br>D.分区，索引`, answer: "C"
    },
    {
        question: `下列哪项不是Hive中常用的数据类型（）	<br>A.BIGINT	<br>B.DOUBLE	<br>C.STRING	<br>D.USHORT`, answer: "D"
    },
    {
        question: `解决数据倾斜的思路是将key相对分散，并且数据量小的表放在join的左边，这样可以有效减少内存溢出错误发生的几率	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `Hive支持一条一条用insert插入数据	<br>A.对	<br>B.错`, answer: "B"
    },
    {
        question: `如果数据文件数据是纯文本，可以使用STORED AS TEXTFILE创建Hive表	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `Hive创建表如果相同名字的表已经存在，则抛出异常。用户可以用 IF NOT EXIST 选项来忽略这个异常	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `Hive中不支持如下的DML操作包括（）	<br>A.INSERT	<br>B.UPDATE	<br>C.DELETE	<br>D.SELECT`, answer: ["B", "C"], type: "checkbox"
    },
    {
        question: `关于Hive中内部表和外部表的说法对的是（）	<br>A.删除一个内部表的同时会同时删除表的元数据和数据	<br>B.删除一个内部表的同时不会同时删除表的元数据和数据	<br>C.删除一个外部表，同时删除元数据和数据	<br>D.删除一个外部表，只删除元数据而保留数据`, answer: ["A", "D"], type: "checkbox"
    },
    {
        question: `Hive支持in|not in子查询的语法	<br>A.对	<br>B.错`, answer: "B"
    },
    {
        question: `通常情况下，MAP/REDUCE作业会通过input的目录产生一个或者多个map任务	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `如果数据文件数据是纯文本，可以使用STORED AS TEXTFILE创建Hive表	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `Hive创建表如果相同名字的表已经存在，则抛出异常。用户可以用 IF NOT EXIST 选项来忽略这个异常	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `Hive表数据一旦导入，则不可修改。要么drop掉整个表，要么建立新的表，导入新的数据。	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `Hive最重视的性能是可测量性，延展性，容错性和对于输入格式的宽松匹配性	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `Hive中支持的存储格式有（）	<br>A.TextFile	<br>B.SequenceFile	<br>C.RCFile	<br>D.LZOFile`, answer: ["A", "B", "C"], type: "checkbox"
    },
    {
        question: `Hive中包含以下数据模型（）	<br>A.Table	<br>B.External Table	<br>C.Partition 	<br>D.Bucket`, answer: ["A", "B", "C", "D"], type: "checkbox"
    },
    {
        question: `Hadoop fs中的 -get 和 -put命令操作对象是	<br>A.文件	<br>B.目录	<br>C.两者都是	<br>D.两者都不是`, answer: "C"
    },
    {
        question: `配置Hadoop时，JAVA_HOME包含在哪一个配置文件中	<br>A.hadoop-default.xml	<br>B.hadoop-env.sh	<br>C.hadoop-site.xml	<br>D.configuration.xsl`, answer: "B"
    },
    {
        question: `NameNode在启动时自动进入安全模式，在安全模式阶段，说法错误的是	<br>A.安全模式目的是在系统启动时检查各个DataNode上数据块的有效性	<br>B.根据策略对数据块进行必要的复制或删除	<br>C.当数据块最小百分比数满足的最小副本数条件时，会自动退出安全模式	<br>D.文件系统允许有修改`, answer: "D"
    },
    {
        question: `如果想要修改集群的备份数量,可以修改下面哪个配置文件	<br>A.mapred-site.xml	<br>B.core-site.xml	<br>C.hdfs-site.xml	<br>D.hadoop-env.sh`, answer: "C"
    },
    {
        question: `在Centos7中,如果想要查看本机的主机名可以使用下面哪个命令	<br>A.reboot	<br>B.hostname	<br>C.pwd	<br>D.tail`, answer: "B"
    },
    {
        question: `下列哪项可以作为集群的管理工具	<br>A.Cludera Manager	<br>B.Pdsh	<br>C.Rsync+ssh+scp	<br>D.以上都可以`, answer: "D"
    },
    {
        question: `Hadoop默认调度器策略为FIFO	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `集群内每个节点都应该配置RAID5，避免单磁盘损坏影响这个节点运行	<br>A.对	<br>B.错`, answer: "B"
    },
    {
        question: `HDFS有高容错性的特点,并且设计用来部署在廉价的硬件上	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `DROP hive外部表时,会删除HDFS上的数据	<br>A.对	<br>B.错`, answer: "B"
    },
    {
        question: `HBASE性能优化包含以下哪些选项	<br>A.读优化	<br>B.写优化	<br>C.配置优化	<br>D.JVM优化`, answer: ["A", "B", "C", "D"], type: "checkbox"
    },
    {
        question: `Cloudera提供哪几种安装CDH的方法	<br>A.Cloudera manager	<br>B.tarball	<br>C.yum	<br>D.rpm`, answer: ["A", "B", "C", "D"], type: "checkbox"
    },
    {
        question: `以下哪一项不属于Hadoop可以运行的模式	<br>A.本地模式	<br>B.伪分布式模式	<br>C.分布式模式	<br>D.互联模式`, answer: "D"
    },
    {
        question: `Hadoop的作者是下面哪一位	<br>A.Doug Cutting	<br>B.Grace Hopper	<br>C.Kent Beck	<br>D.Martin Fowler`, answer: "A"
    },
    {
        question: `下列关于MapReduce的说法不正确的是	<br>A.MapReduce是一种计算框架	<br>B.MapReduce来源于Google的学术论文	<br>C.MapReduce隐藏了并行计算的细节	<br>D.MapReduce程序只能用Java语言编写`, answer: "D"
    },
    {
        question: `关于SecondaryNameNode，下面哪项是正确的	<br>A.它是Namenode 的热备	<br>B.它对内存没有要求	<br>C.它的目的是帮助NameNode合并编辑日志，减少NameNode启东时间	<br>D.它应与NameNode部署到同一个节点`, answer: "C"
    },
    {
        question: `下面对HBASE的描述哪一项是错误的	<br>A.不是开源的	<br>B.是面向列的	<br>C.是分布式的	<br>D.是一种NoSQL数据库`, answer: "A"
    },
    {
        question: `以下哪个文件系统与HDFS类似	<br>A.NTFS	<br>B.FAT32	<br>C.GFS	<br>D.EXT4`, answer: "C"
    },
    {
        question: `关于Hadoop本地模式和伪分布式模式的说法，正确的是	<br>A.两者都起守护进程，且守护进程运行在一台机器上	<br>B.本地模式不适用HDFS，但加载守护进程	<br>C.两者都不与守护进程交互，避免复杂性	<br>D.后者比前者增加了HDFS输入输出以及可检查内存使用情况`, answer: "D"
    },
    {
        question: `HDFS适合哪种读写任务	<br>A.一次写入，少次读取	<br>B.多次写入，少次读取	<br>C.一次写入，多次读取	<br>D.多次写入，多次读取`, answer: "C"
    },
    {
        question: `HDFS文件默认保存几份	<br>A.1	<br>B.2	<br>C.3	<br>D.4`, answer: "C"
    },
    {
        question: `下面哪个程序负责HDFS数据存储	<br>A.NameNode	<br>B.SecondaryNameNode	<br>C.ResourceManager	<br>D.DataNode`, answer: "D"
    },
    {
        question: `下面哪个不属于Hadoop的调度策略	<br>A.后进先出调度	<br>B.先进先出调度	<br>C.计算能力调度	<br>D.公平调度`, answer: "A"
    },
    {
        question: `HBASE依靠以下哪项存储底层数据	<br>A.HDFS	<br>B.Zookeeper	<br>C.ResourceManager	<br>D.MapReduce`, answer: "A"
    },
    {
        question: `HDFS的NameNode负责管理文件系统的命名空间，将所有的文件和文件夹的元数据保存在一个文件系统树中，这些信息也会在硬盘上保存成以下文件：	<br>A.日志	<br>B.命名空间镜像	<br>C.两者都是	<br>D.两者都不是`, answer: "C"
    },
    {
        question: `目前的Hadoop最高版本是哪个	<br>A.1.x	<br>B.2.x	<br>C.3.x	<br>D.4.x`, answer: "C"
    },
    {
        question: `配置机架感知的下面哪项正确	<br>A.MapReduce会根据机架获取离自己比较近的网络数据	<br>B.写入数据的时候会写到不同机架的DataNode	<br>C.如果一个机架出问题，不会影响数据读写	<br>D.都正确`, answer: "D"
    },
    {
        question: `Hadoop支持数据的随机读写	<br>A.对	<br>B.错`, answer: "B"
    },
    {
        question: `MapReduce适于PB级别以上的海量数据在线处理	<br>A.对	<br>B.错`, answer: "B"
    },
    {
        question: `MapReduce计算过程中，相同的key默认会被发送到同一个reduce task处理	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `HDFS的namenode保存了一个文件包括哪些数据库，分布在哪些数据节点上，这些信息也存储在硬盘上	<br>A.对	<br>B.错`, answer: "B"
    },
    {
        question: `Secondary NameNode是namenode出现问题时的备用节点	<br>A.对	<br>B.错`, answer: "B"
    },
    {
        question: `Hadoop自身具有严格的权限管理和安全措施保障集群正常运行	<br>A.对	<br>B.错`, answer: "B"
    },
    {
        question: `因为HDFS有多个副本，所以NameNode不存在单点问题	<br>A.对	<br>B.错`, answer: "B"
    },
    {
        question: `在大数据框架中,批处理系统一般不适用于对延时要示较高的场景	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `HDFS既适合超大数据集存储,也适合小数据集的存储	<br>A.对	<br>B.错`, answer: "B"
    },
    {
        question: `Hadoop的框架最核心的设计就是:HDFS和MapReduce	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `以下哪些是大数据的特点	<br>A.巨大的数据量	<br>B.多结构化数据	<br>C.增长速度快	<br>D.价值密度高`, answer: ["A", "B", "C"], type: "checkbox"
    },
    {
        question: `以下哪些是HBASE的特性	<br>A.高可靠性	<br>B.高性能	<br>C.面向列	<br>D.可伸缩`, answer: ["A", "B", "C", "D"], type: "checkbox"
    },
    {
        question: `以下哪些属于结构化数据	<br>A.企业ERP数据	<br>B.财务系统数据	<br>C.视频监控数据	<br>D.行政审批表单数据`, answer: ["A", "B", "D"], type: "checkbox"
    },
    {
        question: `关于HDFS集群中的DataNode的描述正确的是	<br>A.一个DataNode上存储的所有数据块可以有相同的	<br>B.存储客户端上传的数据的数据块	<br>C.DataNode之间可以互相通信	<br>D.响应客户端的所有读写数据请求,为客户端的存储和读取数据提供支撑`, answer: ["B", "C", "D"], type: "checkbox"
    },
    {
        question: `下列关于HDFS的描述哪些是错误的	<br>A.NameNode磁盘元数据保存Block的位置信息	<br>B.DataNode通过长连接与NameNode保持通信	<br>C.HDFS集群支持数据的随机读写	<br>D.如果NameNode宕机,SecondaryNameNode会接替它使集群继续工作`, answer: ["A", "B", "C", "D"], type: "checkbox"
    },
    {
        question: `MySQL数据库四种特性，不包括（）	<br>A.原子性	<br>B.事务性	<br>C.一致性	<br>D.隔离性`, answer: "B"
    },
    {
        question: `大数据的起源是？（）	<br>A.金融	<br>B.互联网	<br>C.淘宝	<br>D.公共管理`, answer: "B"
    },
    {
        question: `大数据时代，数据使用最关键的是？（）	<br>A.数据收集	<br>B.数据再利用	<br>C.数据存储	<br>D.数据分析`, answer: "B"
    },
    {
        question: `大数据是由（）公司最先提出来的	<br>A.微软	<br>B.谷歌	<br>C.百度	<br>D.阿里`, answer: "B"
    },
    {
        question: `大数据最明显的特点是？（）	<br>A.数据类型多	<br>B.数据量大	<br>C.数据处理速度快	<br>D.数据价值密度高`, answer: "B"
    },
    {
        question: `数据精细化程度是指？（），越细化的数据，价值越高	<br>A.规模	<br>B.颗粒度	<br>C.活性	<br>D.关联性`, answer: "B"
    },
    {
        question: `数据生命周期管理实践中，（）是执行方法	<br>A.数据存储和规范	<br>B.数据管理和维护	<br>C.数据价值发觉和利用	<br>D.数据应用开发和管理`, answer: "B"
    },
    {
        question: `大数据的利用过程是（）。	<br>A.采集——统计——清洗——挖掘	<br>B. 采集——清洗——统计——挖掘	<br>C.采集——挖掘——清洗——统计	<br>D. 采集——清洗——挖掘——统计`, answer: "B"
    },
    {
        question: `下列关于计算机存储容量单位的说法中，错误的是？（）	<br>A.1KB＜1MB＜1GB	<br>B.一个汉字需要一个字节的存储空间	<br>C.基本单位是字节（Byte）	<br>D.一个字节能够容纳一个英文字符`, answer: "B"
    },
    {
        question: `下列哪项通常是集群的最主要瓶颈 ()	<br>A.CPU	<br>B. 磁盘 IO	<br>C.网络	<br>D.内存`, answer: "B"
    },
    {
        question: `以下哪一项属于非结构化数据。（）	<br>A.企业ERP数据          	<br>B.视频监控数据	<br>C.财务系统数据          	<br>D.日志数据`, answer: "B"
    },
    {
        question: `HDFS是基于流数据模式访问和处理超大文件的需求而开发的，具有高容错、高可靠性、高可扩展性、高吞吐率等特征，适合的读写任务是（）	<br>A.一次写入，少次读	<br>B. 一次写入，多次读	<br>C. 多次写入，多次读	<br>D.多次写入，少次读`, answer: "B"
    },
    {
        question: `在Centos7中,如果想要查看本机的主机名可以使用下面哪个命令?（）	<br>A.ps -ef           	<br>B.hostname	<br>C.pwd	<br>D.tail`, answer: "B"
    },
    {
        question: `关于大数据的价值密度描述正确的是以下哪个?（）	<br>A.大数据由于其数据量大,所以其价值也大。	<br>B.大数据由于其数据量大,所以其价值密度低。	<br>C.大数据的价值密度是指其数据类型多且复杂。	<br>D.大数据由于其数据量大,所以其价值密度高`, answer: "B"
    },
    {
        question: `数据仓库的最终目的是？（）	<br>A.收集业务需求	<br>B.为用户和业务部门提供决策支持	<br>C.开发数据仓库的应用分析++	<br>D.建立数据仓库逻辑模型`, answer: "B"
    },
    {
        question: `事物的四大特性(ACID)? （）	<br>A.原子性	<br>B.一致性	<br>C.隔离性	<br>D.持久性`, answer: ["A", "B", "C", "D"], type: "checkbox"
    },
    {
        question: `ETL的全称是什么（）	<br>A.Extract	<br>B.Transform	<br>C.Load`, answer: ["A", "B", "C"], type: "checkbox"
    },
    {
        question: `下列属于ETL过程中基本过程的是什么？（）	<br>A.抽取（extract）、	<br>B.清洗（clean）、	<br>C.一致性处理（comform）	<br>D.交付（delivery）`, answer: ["A", "B", "C", "D"], type: "checkbox"
    },
    {
        question: `关于脏数据说法正确的是? （）	<br>A.格式不规范	<br>B.数据不完整	<br>C.编码不统一	<br>D.意义不明确`, answer: ["A", "B", "C", "D"], type: "checkbox"
    },
    {
        question: `大数据的“4V”特征包括：（）	<br>A.Volume(海量化)	<br>B.Variety(多样化)	<br>C.Velocity(快速化)	<br>D.Value(价值化)`, answer: ["A", "B", "C", "D"], type: "checkbox"
    },
    {
        question: `对于大数据而言，最基本、最重要的要求就是减少错误、保证质量。因此，大数据收集的信息量要尽量精确。（）	<br>A.对	<br>B.错`, answer: "B"
    },
    {
        question: `一般而言，分布式数据库是指物理上分散在不同地点但在逻辑上是统一的数据库。因此分布式数据库具有物理上的独立性、逻辑上的一体性、性能上的可扩展性等特点。()	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `数据再利用的价值表现为：挖掘数据的潜在价值、实现数据重组的创新价值、利用数据可扩展性拓宽业务领域、优化存储设备，降低设备成本、提高社会效益，优化社会管理等。（）	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `数据仓库的最终目的是为用户和业务部门提供决策支持。（）	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `在数据生命周期管理实践中执行方法是指数据的管理和维护。（）	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `数据重组是数据的重新生产和重新采集（）	<br>A.对	<br>B.错`, answer: "B"
    },
    {
        question: `数据仓库的最终目的是收集业务需求,建立数据仓库逻辑模型（）	<br>A.对	<br>B.错`, answer: "B"
    },
    {
        question: `当前，大数据产业发展的特点是、规模较大、增速很快、多产业交叉融合（）	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `数据再利用的意义在于挖掘数据的潜在价值、实现数据重组的创新价值、利用数据可扩展性拓宽业务领域（）	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `一般而言，分布式数据库是指物理上分散在不同地点，但在逻辑上是统一的数据库。因此分布式数据库具有物理上的独立性、逻辑上的一体性、性能上的可扩展性等特点。（）	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `Hadoop的三种安装模式不包括以下哪种? （）	<br>A.完全分布式模式                	<br>B.两分布式模式	<br>C.伪分布模式                  	<br>D.单机模式`, answer: "B"
    },
    {
        question: `HBase 依靠（）存储底层数据	<br>A.MYSQL	<br>B.HDFS	<br>C.HIVE	<br>D.ORACLE`, answer: "B"
    },
    {
        question: `下面哪个用户不是ORACLE缺省安装后就存在的用户( )	<br>A.SYSTE	<br>B.SYSDBA	<br>C.SCOTT	<br>D.SYS`, answer: "B"
    },
    {
        question: `在Oracle中，用户（  ）拥有所有内置的程序包。	<br>A.SYSTEM	<br>B.SYS	<br>C.PUBLIC	<br>D.DEFAULT`, answer: "B"
    },
    {
        question: `下面哪个程序负责 HDFS 数据存储。()	<br>A.NameNode	<br>B.Datanode	<br>C.Jobtracker	<br>D.Node`, answer: "B"
    },
    {
        question: `关于HDFS集群中的DataNode的描述不正确的是（）	<br>A.存储客户端上传的数据的数据块	<br>B.一个DataNode上存储的所有数据块可以有相同的	<br>C.DataNode之间可以互相通信	<br>D.响应客户端的所有读写数据请求,为客户端的存储和读取数据提供支撑`, answer: "B"
    },
    {
        question: `Spark几种部署方式包括()	<br>A.Local	<br>B.Standalone	<br>C.Yarn	<br>D.Mesos`, answer: ["A", "B", "C", "D"], type: "checkbox"
    },
    {
        question: `下列属于大数据组件的是()	<br>A.HIVE	<br>B.SPARK	<br>C.FLINK	<br>D.MongoDB`, answer: ["A", "B", "C"], type: "checkbox"
    },
    {
        question: `脏读(Drity Read)：某个事务已更新一份数据，另一个事务在此时读取了同一份数据，由于某些原因，前一个RollBack了操作，则后一个事务所读取的数据就会是不正确的。()	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `不可重复读(Non-repeatable read):在一个事务的两次查询之中数据不一致，这可能是两次查询过程中间插入了一个事务更新的原有的数据。()	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `幻读(Phantom Read):在一个事务的两次查询中数据笔数不一致，例如有一个事务查询了几列(Row)数据，而另一个事务却在此时插入了新的几列数据，先前的事务在接下来的查询中，就会发现有几列数据是它先前所没有的。()	<br>A.对	<br>B.错`, answer: "A"
    },
    {
        question: `Hadoop和Spark都是大数据的分析技术。（）	<br>A.对	<br>B.错`, answer: "B"
    },
]