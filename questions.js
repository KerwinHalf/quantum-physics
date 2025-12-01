// 高等量子力学题库-Kerwin's
const courseData = [
    {
        chapterTitle: "Kerwin",
        exams: [
            {
                title: "Quantum Zeno Effect/量子芝诺效应",
                questions: [
                    {
                        q: "为什么人不能从“坐着的我”突然变成“站着的我”？",
                        a: "答案：环境监视与量子芝诺效应",
                        detail: "<strong>解析：</strong><br>1. 环境（光子、空气）对宏观物体的观测频率高达 $10^{20}$ Hz。<br>2. <strong>量子芝诺效应</strong>告诉我们：如果你频繁地盯着一个量子系统看，它的演化就会被冻结。<br>3. 环境的高频测量把你死死地“锁”在当前的经典轨迹上，禁止了大幅度的量子隧穿。",
                        note: "被环境“看”得死死的，动弹不得。"
                    }
                ]
            },
            {
                title: "Ergodicity/各态历经假说：时间换空间",
                questions: [
                    {
                        q: "在正则系综的推导中，为了推导方便，脑补了一个宏大的‘复本大军’（大系综）。但回到现实，我就手里拿这一杯水（单个正则系统），它孤零零的，哪来的‘大系统’？既然没有大系统，那所谓N趋近于∞的数学极限就不存在，那这个概率分布凭什么还能用在这一杯水上？",
                        a: "答案：各态历经假说",
                        detail: "<strong>解析：</strong>对于大多数物理系统，只要时间足够长，这单独一个系统就会把所有可能的状态都跑一遍。而且！它在某个状态$E_{r}$停留的时间比例，<strong>恰好等于</strong>我们用那$N$个复本算出来的概率$p_{r}$.虽然你只有一杯水（单独系统），但这杯水里的分子在疯狂运动。上一秒它在这个微观态,下一秒它在那个微观态。你看它一分钟，它经历的微观态分布，就等价于那一瞬间$N$个复本的分布。",
                        note: "孤立的“单独系统”在时间长河里的表现，就是一个“大系综”。"
                    }
                ]
            }
        ]
    },
    {
        chapterTitle: "Density Matrix (密度矩阵)",
        exams: [
            {
                title: "Part1",
                questions: [
                    {
                        q: "1. 【概念辨析】关于纯态与混态：一个处于混态的系统（例如 50% $|1\\rangle$ 和 50% $|2\\rangle$），如果我们站在一个非常巧妙的观测角度（选择一个特殊的基底），是有可能把它看成一个纯态的。",
                        a: "判断：错 (False)",
                        detail: "<strong>理由：</strong>混态的本质是信息的缺失（熵 > 0）。数学上，幺正变换（改变基底）不改变矩阵的迹和纯度 $\\text{Tr}(\\rho^2)$。物理上，“两根独立的棍子”永远变不成“一根棍子”。",
                        note: "这是铁律！基变换只能改变观测结果的分布，改变不了系统的本质纯度。"
                    },
                    {
                        q: "2. 【概念辨析】关于相干性：已知某系统的密度矩阵在能量表象下是对角矩阵 $\\rho = \\begin{pmatrix} 0.6 & 0 \\\\ 0 & 0.4 \\end{pmatrix}$。这说明该系统处于定态，且粒子在两个能级之间完全没有转化（跃迁）。",
                        a: "判断：对 (True)",
                        detail: "<strong>理由：</strong>非对角项（相干项）为 0，说明没有“桥”；且哈密顿量是对角的，没有“推手” ($H_{12}=0$)。所以布居数 $\\rho_{nn}$ 不随时间变化。",
                        note: "没有路（相干项），也没有车（相互作用），粒子只能原地踏步。"
                    },
                    {
                        q: "3. 【概念辨析】关于旋波近似 (RWA)：在推导 Rabi 振荡时，我们扔掉了 $e^{i(\\Omega+\\omega)t}$ 这一项（反旋项），是因为这一项违反了能量守恒定律，物理上绝对不允许发生。",
                        a: "判断：错 (False) 或 不严谨",
                        detail: "<strong>理由：</strong>量子力学允许短时间的能量不守恒（不确定性原理）。真正的原因是它是“快变项”！在积分演化时，正负快速抵消，平均效果为零，对长时间的累积演化没有实质贡献。",
                        note: "记住四个字——“瞎忙活”！频率太快，干不了实事。"
                    },
                    {
                        q: "4. 【计算题：自旋进动】设电子处于恒定磁场 $H_0 = \\frac{\\hbar\\Omega}{2}\\sigma_z$ 中。初始时刻 ($t=0$) 处于自旋向右的态 $|+\\rangle_x = \\frac{1}{\\sqrt{2}}(|\\uparrow\\rangle + |\\downarrow\\rangle)$。<br>请写出 $t$ 时刻的密度矩阵 $\\rho(t)$，并说明非对角元的变化规律。",
                        a: "答案：$\\rho(t) = \\begin{pmatrix} 0.5 & 0.5 e^{-i\\Omega t} \\\\ 0.5 e^{i\\Omega t} & 0.5 \\end{pmatrix}$",
                        detail: "<strong>推导：</strong>在能量表象下，对角元（布居数）保持 0.5 不变。非对角元（相干项）随时间积累相位因子 $e^{-i\\Omega t}$。",
                        note: "这就是你的“棍子模型”！高度（对角元）不变，但在赤道面上绕 Z 轴疯狂转圈（进动）。"
                    },
                    {
                        q: "5. 【计算题：约化密度矩阵】考虑非均匀纠缠态 $|\\Psi_{AB}\\rangle = \\sqrt{\\frac{3}{4}} |\\uparrow\\uparrow\\rangle + \\sqrt{\\frac{1}{4}} |\\downarrow\\downarrow\\rangle$。<br>请计算粒子 A 的约化密度矩阵 $\\rho_A$，并判断它是纯态还是混态？",
                        a: "答案：$\\rho_A = \\begin{pmatrix} 0.75 & 0 \\\\ 0 & 0.25 \\end{pmatrix}$",
                        detail: "<strong>推导：</strong>对 B 求偏迹。因为粒子 B 的基底 $|\\uparrow\\rangle$ 和 $|\\downarrow\\rangle$ 正交，所以总矩阵中的交叉项（非对角块）被“杀”死了，只留下了对角块。<br><strong>纯度检查：</strong> $0.75^2 + 0.25^2 = 0.625 < 1$，所以是<strong>混态</strong>。",
                        note: "只要整体是纠缠的，局部一定是混的（丢失了信息）。"
                    },
                    {
                        q: "6. 【计算题：相互作用绘景】已知 $H = H_0 + V$，微扰项 $V = g(\\sigma_+ + \\sigma_-)(e^{-i\\omega t} + e^{i\\omega t})$。<br>利用旋波近似 (RWA)，写出简化后的有效哈密顿量。",
                        a: "答案：$V^I_{RWA} = g \\left( \\sigma_+ e^{i(\\Omega-\\omega)t} + \\sigma_- e^{-i(\\Omega-\\omega)t} \\right)$",
                        detail: "<strong>推导：</strong>展开后有四项。保留指数相减的“慢变项”，扔掉指数相加的“快变项”。<br>保留项对应：$\\sigma_+$ (原子吸收) 配 $e^{-i\\omega t}$ (光场湮灭)；$\\sigma_-$ (原子发射) 配 $e^{i\\omega t}$ (光场产生)。",
                        note: "这就是“合理的买卖”！我有钱买，你有货卖，能量守恒，交易成功。"
                    }
                ]
            },
            {
                title: "Part2",
                questions: [
                    {
                        q: "1. 【判断题：演化的纯度】一个孤立系统（Hamiltonian 为 $H$），如果在 $t=0$ 时刻处于一个混态（例如 $\\rho(0) = 0.8|1\\rangle\\langle 1| + 0.2|2\\rangle\\langle 2|$）。<br>经过一段时间演化后，有没有可能因为 $H$ 的作用，让它变成一个纯态？",
                        a: "判断：错 (False)",
                        detail: "<strong>理由：</strong>刘维尔定理告诉我们，密度矩阵的演化是幺正变换 $\\rho(t) = U \\rho(0) U^\\dagger$。幺正变换不改变矩阵的特征值，也不改变迹和纯度 $\\text{Tr}(\\rho^2)$。<br>物理上：如果你手里是“两根棍子”，只要不进行测量或耗散，它永远不会变成“一根棍子”。",
                        note: "想要变纯？必须把不需要的信息“扔掉”（测量/耗散），孤立演化是做不到的。"
                    },
                    {
                        q: "2. 【判断题：约化逆命题】已知双粒子系统 A+B。如果我们算出粒子 A 的约化密度矩阵 $\\rho_A$ 是一个<strong>纯态</strong>。<br>那么，我们是否可以断定：总系统一定<strong>没有</strong>处于纠缠态？",
                        a: "判断：对 (True)",
                        detail: "<strong>理由：</strong>这是一个逻辑铁律：<br>1. 如果整体纠缠 $\\rightarrow$ 局部混态。<br>2. 逆否命题：如果局部纯态 $\\rightarrow$ 整体非纠缠（直积态）。<br>举例：如果 $\\rho_A = |0\\rangle\\langle 0|$，那总态只能是 $|0\\rangle_A \\otimes |\\phi\\rangle_B$ 的形式。",
                        note: "只有“单身”（直积态）的人，心里才只有自己（局部纯态）；“恋爱”（纠缠）的人，心里乱糟糟的（局部混态）。"
                    },
                    {
                        q: "3. 【计算题：纯推手哈密顿量】设二能级系统 $H = \\hbar \\Omega \\sigma_x = \\begin{pmatrix} 0 & \\hbar\\Omega \\\\ \\hbar\\Omega & 0 \\end{pmatrix}$（注意只有非对角项）。<br>初始处于基态 $\\rho(0) = \\begin{pmatrix} 1 & 0 \\\\ 0 & 0 \\end{pmatrix}$。<br>请利用矩阵指数求出 $\\rho(t)$。",
                        a: "答案：$\\rho(t) = \\begin{pmatrix} \\cos^2(\\Omega t) & \\frac{i}{2}\\sin(2\\Omega t) \\\\ -\\frac{i}{2}\\sin(2\\Omega t) & \\sin^2(\\Omega t) \\end{pmatrix}$",
                        detail: "<strong>推导步骤：</strong><br>1. 演化算符 $U(t) = e^{-i\\Omega t \\sigma_x} = \\cos(\\Omega t)I - i\\sin(\\Omega t)\\sigma_x$。<br>2. 计算 $\\rho(t) = U \\rho(0) U^\\dagger$。<br>3. 结果显示粒子在 $|1\\rangle$ 和 $|2\\rangle$ 之间翻转，且中间产生了虚数的相干项。",
                        note: "因为 $H$ 只有非对角项（推手），没有对角项（楼层差），所以粒子像荡秋千一样在两态之间完美震荡。"
                    },
                    {
                        q: "4. 【计算题：带参数的纠缠】考虑通用纠缠态 $|\\Psi\\rangle = \\alpha |00\\rangle + \\beta |11\\rangle$。<br>求粒子 A 的约化密度矩阵 $\\rho_A$，并讨论其相干项。",
                        a: "答案：$\\rho_A = \\begin{pmatrix} \\alpha^2 & 0 \\\\ 0 & \\beta^2 \\end{pmatrix}$",
                        detail: "<strong>推导：</strong><br>1. 总矩阵 $\\rho_{AB}$ 只有四个角有元素。<br>2. 对 B 求偏迹（分块求迹），非对角块（右上角）因为 $|0\\rangle_B$ 和 $|1\\rangle_B$ 正交而被“杀”死，迹为 0。<br><strong>结论：</strong> $\\rho_A$ 是对角矩阵，相干项为 0。证明了只要有纠缠，子系统的相干性就会丢失。",
                        note: "当 $\\alpha=\\beta$ 时，这就是完全混态。纠缠越深，局部越乱。"
                    }
                ]
            },
            {
                title: "Part3",
                questions: [
                    {
                        q: "1. 【概念辨析：混合的多义性】<br>情景 A：50% $|0\\rangle$ 和 50% $|1\\rangle$。<br>情景 B：50% $|+\\rangle_x$ 和 50% $|-\\rangle_x$。<br>作为一个观测者，拿到这个盒子后，你能通过实验区分出它是情景 A 还是情景 B 吗？",
                        a: "答案：不能区分",
                        detail: "<strong>证明：</strong><br>$\\rho_A = 0.5\\begin{pmatrix}1&0\\\\0&0\\end{pmatrix} + 0.5\\begin{pmatrix}0&0\\\\0&1\\end{pmatrix} = 0.5 I$<br>$\\rho_B = 0.5\\rho_+ + 0.5\\rho_- = 0.5\\begin{pmatrix}0.5&0.5\\\\0.5&0.5\\end{pmatrix} + 0.5\\begin{pmatrix}0.5&-0.5\\\\-0.5&0.5\\end{pmatrix} = 0.5 I$<br>矩阵完全一样，所以物理上无法区分。",
                        note: "这就叫“殊途同归”。不同的制备历史，可以导致完全相同的物理状态（密度矩阵）。"
                    },
                    {
                        q: "2. 【几何直觉：布洛赫球内部】纯态分布在球面 ($r=1$)，混态在球内 ($r<1$)。<br>请问球心 ($r=0$) 对应什么状态？写出其矩阵形式。",
                        a: "答案：完全混态 $\\rho = \\begin{pmatrix} 0.5 & 0 \\\\ 0 & 0.5 \\end{pmatrix}$",
                        detail: "<strong>物理含义：</strong>球心意味着在 x, y, z 任何方向上都没有偏向性（各向同性）。<br><strong>计算验证：</strong> $\\langle \\sigma_x \\rangle = \\text{Tr}(\\rho \\sigma_x) = 0$，同理 y, z 均为 0。",
                        note: "这是最“烂”的状态，信息量为 0，纯度最低。"
                    },
                    {
                        q: "3. 【硬核计算：非对称纠缠】考虑 W-like 态 $|\\Psi\\rangle = \\frac{1}{\\sqrt{2}}|00\\rangle + \\frac{1}{2}|01\\rangle + \\frac{1}{2}|10\\rangle$。<br>请对 A 求偏迹，计算粒子 B 的约化密度矩阵 $\\rho_B = \\text{Tr}_A(\\rho_{AB})$。",
                        a: "答案：$\\rho_B = \\begin{pmatrix} 0.75 & \\approx 0.35 \\\\ \\approx 0.35 & 0.25 \\end{pmatrix}$",
                        detail: "<strong>推导细节：</strong><br>1. 写出 $4\\times 4$ 总矩阵 $\\rho_{AB}$。<br>2. <strong>对 A 求迹</strong>（注意不是对 B）：要把左上角块 $M_{00}$ 和右下角块 $M_{11}$ 相加。<br>3. $M_{00} = \\begin{pmatrix} 0.5 & 1/2\\sqrt{2} \\\\ 1/2\\sqrt{2} & 0.25 \\end{pmatrix}$， $M_{11} = \\begin{pmatrix} 0.25 & 0 \\\\ 0 & 0 \\end{pmatrix}$。<br>4. 相加得 $\\rho_B = \\begin{pmatrix} 0.75 & 1/2\\sqrt{2} \\\\ 1/2\\sqrt{2} & 0.25 \\end{pmatrix}$。",
                        note: "<strong>非对角项不为 0！</strong> 这说明即使扔掉了 A，粒子 B 内部依然保留了部分相干性（不是完全混态）。这是 W 态的特性。"
                    }
                ]
            },
            {
                title: "Part4",
                questions: [
                    {
                        q: "1. 【计算题：冯·诺依曼熵】量子熵定义为 $S = -\\text{Tr}(\\rho \\ln \\rho)$。<br>请分别计算纯态 $\\rho_1 = |1\\rangle\\langle 1|$ 和完全混态 $\\rho_2 = 0.5(|0\\rangle\\langle 0| + |1\\rangle\\langle 1|)$ 的熵。",
                        a: "答案：$S_{pure} = 0$； $S_{mixed} = \\ln 2 \\approx 0.69$",
                        detail: "<strong>推导：</strong><br>1. 纯态本征值是 1, 0。$S = -(1\\ln 1 + 0) = 0$。信息已知，无熵。<br>2. 完全混态本征值是 0.5, 0.5。$S = -(0.5\\ln 0.5 + 0.5\\ln 0.5) = -\\ln(1/2) = \\ln 2$。这是二能级系统的最大熵。",
                        note: "熵衡量的是“无知程度”。纯态我们全知道（无知=0），完全混态我们全瞎蒙（无知=最大）。"
                    },
                    {
                        q: "2. 【物理直觉：热力学极限】对于一个二能级系统，当温度 $T \\to \\infty$ 时，其热平衡态密度矩阵 $\\rho_{th}$ 会变成什么样？为什么？",
                        a: "答案：会变成完全混态 $\\frac{1}{2}I$",
                        detail: "<strong>推导：</strong><br>1. 玻尔兹曼因子 $e^{-E/kT}$。当 $T\\to\\infty$ 时，指数趋于 0，因子 $e^0 \\to 1$。<br>2. 两个能级的权重 $w_1 \\approx 1, w_2 \\approx 1$。<br>3. 归一化系数 $Z = 1+1=2$。<br>4. 结果为 $\\begin{pmatrix} 0.5 & 0 \\\\ 0 & 0.5 \\end{pmatrix}$。",
                        note: "高温导致最大无序。能量差微不足道，粒子去哪儿的概率都一样。"
                    },
                    {
                        q: "3. 【综合分析：测量的后果】<br>已知初始纯态 $|+\\rangle = \\frac{1}{\\sqrt{2}}(|0\\rangle + |1\\rangle)$。<br>如果你对其进行 $\\sigma_z$ 测量（区分 0 和 1），但<strong>不记录</strong>测量结果。<br>请写出测量后的密度矩阵，并计算系统的纯度变化。",
                        a: "答案：变成混态 $\\rho' = \\begin{pmatrix} 0.5 & 0 \\\\ 0 & 0.5 \\end{pmatrix}$，纯度从 1 降为 0.5",
                        detail: "<strong>过程解析：</strong><br>1. 初始矩阵 $\\rho_{in} = \\begin{pmatrix} 0.5 & 0.5 \\\\ 0.5 & 0.5 \\end{pmatrix}$（纯态，有相干）。<br>2. 测量 $\\sigma_z$ 会强行抹去非对角项（投影测量导致退相干）。<br>3. 结果变成对角矩阵 $\\text{diag}(0.5, 0.5)$。",
                        note: "这就是所谓的“波函数坍缩”在密度矩阵语言里的描述——非对角项（相干性）的瞬间消失；测量哪个算符，就在哪个算符的本征基底下发生退相干。"
                    }
                ]
            },
            {
                title: "Part5",
                questions: [
                    {
                        q: "1. 【物理图像：薛定谔的猫】<br>一只猫处于“死活叠加态” $|\\psi\\rangle = \\frac{1}{\\sqrt{2}}(|\\text{活}\\rangle + |\\text{死}\\rangle)$。它的密度矩阵有非对角项（相干项）。<br>但是在宏观世界，我们从未见过这种叠加。请用密度矩阵的语言解释，<strong>为什么相干项消失了？</strong>",
                        a: "答案：因为与环境发生了纠缠（退相干）。",
                        detail: "<strong>解析：</strong><br>猫不是孤立的，它时刻在和空气分子、光子相互作用（纠缠）。<br>$\\rho_{cat} = \\text{Tr}_{env}(|\\Psi_{total}\\rangle\\langle\\Psi_{total}|)$。<br>环境的正交性极强（空气分子撞一下状态就变了），导致 $\\langle E_1 | E_2 \\rangle \\approx 0$。求偏迹后，非对角项迅速衰减为 0，猫变成了只有对角项的混态（要么死，要么活）。",
                        note: "不是猫不想叠加，是环境‘偷’走了它的相位信息。"
                    },
                    {
                        q: "2. 【计算题：相位阻尼 (Phase Damping)】<br>考虑一个量子比特，其布居数 $\\rho_{00}, \\rho_{11}$ 保持不变（能量守恒），但非对角项随时间指数衰减：$\\rho_{01}(t) = \\rho_{01}(0) e^{-\\gamma t}$。<br>请问：当 $t \\to \\infty$ 时，系统的纯度 $\\text{Tr}(\\rho^2)$ 是多少？（假设初始为叠加态 $|+\\rangle$）",
                        a: "答案：纯度趋于 0.5",
                        detail: "<strong>推导：</strong><br>1. 初始 $|+\\rangle$ 对应 $\\rho(0) = \\begin{pmatrix} 0.5 & 0.5 \\\\ 0.5 & 0.5 \\end{pmatrix}$。<br>2. 演化后 $\\rho(t) = \\begin{pmatrix} 0.5 & 0.5e^{-\\gamma t} \\\\ 0.5e^{-\\gamma t} & 0.5 \\end{pmatrix}$。<br>3. 当 $t \\to \\infty$，非对角项为 0。$\\rho \\to \\text{diag}(0.5, 0.5)$。<br>4. $\\text{Tr}(\\rho^2) = 0.5^2 + 0.5^2 = 0.5$。",
                        note: "这就叫‘退相干’。虽然能量没损失，但量子特性（纯度）丢光了，变成了经典概率分布。"
                    },
                    {
                        q: "3. 【几何直觉：布洛赫球的萎缩】<br>如果用布洛赫矢量 $\\vec{r}$ 来表示密度矩阵 $\\rho = \\frac{1}{2}(I + \\vec{r}\\cdot\\vec{\\sigma})$。<br>在上一题的“相位阻尼”过程中，布洛赫矢量 $\\vec{r}$ 的长度 $|\\vec{r}|$ 是怎么变化的？",
                        a: "答案：长度变短，从球面缩向 z 轴",
                        detail: "<strong>解析：</strong><br>1. $\\rho_{00}, \\rho_{11}$ 不变 $\\to$ $z$ 分量不变（高度不变）。<br>2. $\\rho_{01}$ 衰减 $\\to$ $x, y$ 分量衰减（半径变小）。<br>3. 物理图像：原本指在赤道上的箭头，慢慢缩短，最后变成了球心（或者 z 轴上的一点）。",
                        note: "纯态在球面上，混态在球里面。退相干就是把这一层皮剥掉，把你往球心里按。"
                    }
                ]
            }
        ]
    },
    {
        chapterTitle: "Bloch sphere vineyards of spin 1/2 particles with spin echoes（自旋1/2粒子与自旋回波）",
        exams: [
            {
                title: "Part1",
                questions: [
                    {
                        q: "1. 【判断题】如果一个量子态对应的 Bloch 矢量 $\\mathbf{n}$ 的长度 $|\\mathbf{n}| < 1$，说明这个粒子\"消失\"了一部分物质。",
                        a: "错 (False)",
                        detail: "<strong>解析：</strong>错。Bloch 矢量的长度代表量子态的<strong>相干性</strong>（或纯度）。<br>$|\\mathbf{n}| < 1$ 说明体系处于<strong>混态</strong>（Mixed State），这是由于环境噪声导致的信息丢失（退相干），而不是粒子本身的质量或能量丢失。<br>只有 $|\\mathbf{n}| = 1$ 时才是纯态。",
                        note: "：想啥呢？粒子要是丢了，那叫核反应或者高能物理，不叫量子计算。"
                    },
                    {
                        q: "2. 【计算题】已知量子态 $|\\psi\\rangle = \\frac{1}{\\sqrt{2}} (|\\uparrow\\rangle - |\\downarrow\\rangle)$，请写出其对应的 Bloch 矢量 $\\mathbf{n} = (n_x, n_y, n_z)$ 以及它在 Bloch 球上的位置。",
                        a: "$(-1, 0, 0)$，指向 x 轴负方向",
                        detail: "<strong>解析：</strong><br>1. 这是一个叠加态，处于 Bloch 球的赤道面上，所以 $n_z = 0$。<br>2. 计算投影：<br> $n_x = \\langle \\psi | \\sigma_x | \\psi \\rangle = -1$ （注意中间的减号导致相位差了 $\\pi$）<br> $n_y = 0$ （系数都是实数，没有虚部 $i$）<br>3. 结论：$\\mathbf{n}$ 指向 x 轴负方向，长度为 1（纯态）。",
                        note: "：看到中间是减号就要警觉！加号是指向 $+x$，减号就是指向 $-x$，这一脚直接把你踢到球的背面去了。"
                    },
                    {
                        q: "3. 【概念题】在\"孔雀开屏\"（退相干）过程中，<strong>每一个单独粒子</strong>的 Bloch 矢量长度和<strong>系综平均</strong>后的 Bloch 矢量长度分别如何变化？",
                        a: "单个不变，平均变短",
                        detail: "<strong>解析：</strong><br><strong>微观上：</strong>每个粒子在特定时刻依然是纯态（只是相位 $\\phi$ 随时间跑偏了），所以单个粒子的模长 $|\\mathbf{n}_j| = 1$ 保持不变。<br><strong>宏观上：</strong>系综平均 $\\mathbf{n}_{\\rho} = \\frac{1}{N}\\sum \\mathbf{n}_j$，由于各个粒子的方向各异（开屏），矢量叠加后互相抵消，导致平均矢量的长度变短（$|\\mathbf{n}_{\\rho}| < 1$），体现为退相干。",
                        note: "：这就是\"微观不乱宏观乱\"。你可以理解为一群没经过训练的士兵，每个人都站得很直（纯态），但是队伍排得歪七扭八（混态）。"
                    },
                    {
                        q: "4. 【推导题】如果在 $t/2$ 时刻施加一个沿 <strong>X轴</strong> 的 $\\pi$ 脉冲。假设施加前某粒子的 Bloch 矢量指向 Y 轴正方向 $(0, 1, 0)$，施加后它变成了什么？",
                        a: "$(0, -1, 0)$",
                        detail: "<strong>解析：</strong><br>记住几何图像口诀：<strong>绕谁转，谁不动；其他的，变反面。</strong><br>1. 脉冲沿 X 轴，所以旋转轴是 X 轴。<br>2. 旋转角度是 $\\pi$ (180度)，即做镜像翻转。<br>3. X 分量不变。<br>4. Y 分量翻转：$1 \\to -1$。<br>结果为 $(0, -1, 0)$。",
                        note: "：就像烤羊肉串，签子是 X 轴。你翻面的时候，肉（Y分量）肯定从上面跑到下面去了，但这肉还在签子上穿得好好的。"
                    },
                    {
                        q: "5. 【应用题】自旋回波（Spin Echo）技术能够成功恢复相干性的<strong>前提条件</strong>是什么？",
                        a: "噪声必须是准静态的（低频噪声）",
                        detail: "<strong>解析：</strong><br>自旋回波利用了时间反演的对称性：前半程跑出去的相位，要靠后半程以<strong>同样的速度</strong>追回来。<br>这要求 $\\tau_{\\text{pulse}} \\ll \\tau_{\\text{correlation}} \\le \\tau_{\\text{interval}}$。<br>通俗地说，就是噪声在单次实验过程中必须保持不变（慢变），如果噪声是<strong>高频快变</strong>的，粒子在前后两段的速度不一样，就\"追\"不回来了。",
                        note: "：这招只治\"慢性病\"。如果那个人变脸比翻书还快（高频噪声），你把他拉回来也没用，他早就不是刚才那个人了。"
                    }
                ]
            }
        ]
    }
];