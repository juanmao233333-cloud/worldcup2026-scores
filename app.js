// 球队数据库
const teamsDB = {
    '阿根廷': { tier: '夺冠热门', flag: '🇦🇷', group: 'J', keyPlayers: '梅西、劳塔罗、阿尔瓦雷斯', strength: 95, info: '卫冕冠军，2024美洲杯冠军' },
    '西班牙': { tier: '夺冠热门', flag: '🇪🇸', group: 'H', keyPlayers: '亚马尔、佩德里、罗德里', strength: 94, info: '2024欧洲杯冠军，传控体系顶级' },
    '法国': { tier: '夺冠热门', flag: '🇫🇷', group: 'I', keyPlayers: '姆巴佩、楚阿梅尼、萨利巴', strength: 93, info: '2018冠军2022亚军' },
    '英格兰': { tier: '夺冠热门', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', group: 'L', keyPlayers: '凯恩、贝林厄姆、萨卡', strength: 92, info: '2024欧洲杯亚军' },
    '巴西': { tier: '夺冠热门', flag: '🇧🇷', group: 'C', keyPlayers: '维尼修斯、拉菲尼亚、罗德里戈', strength: 91, info: '5星巴西' },
    '德国': { tier: '一线强队', flag: '🇩🇪', group: 'E', keyPlayers: '维尔茨、穆夏拉、基米希', strength: 89, info: '4次夺冠' },
    '葡萄牙': { tier: '一线强队', flag: '🇵🇹', group: 'K', keyPlayers: 'C罗、布鲁诺、贝尔纳多', strength: 88, info: '2025欧国联冠军' },
    '荷兰': { tier: '一线强队', flag: '🇳🇱', group: 'F', keyPlayers: '范迪克、加克波、西蒙斯', strength: 87, info: '预选赛强势' },
    '乌拉圭': { tier: '一线强队', flag: '🇺🇾', group: 'H', keyPlayers: '巴尔韦德、努涅斯、阿劳霍', strength: 86, info: '贝尔萨执教' },
    '克罗地亚': { tier: '一线强队', flag: '🇭🇷', group: 'L', keyPlayers: '莫德里奇、科瓦契奇、格瓦迪奥尔', strength: 85, info: '大赛之王' },
    '摩洛哥': { tier: '一线强队', flag: '🇲🇦', group: 'C', keyPlayers: '阿什拉夫、布拉欣·迪亚斯、恩内斯里', strength: 84, info: '2022世界杯四强' },
    '哥伦比亚': { tier: '一线强队', flag: '🇨🇴', group: 'K', keyPlayers: 'J罗、路易斯·迪亚斯', strength: 83, info: '2024美洲杯亚军' },
    '日本': { tier: '一线强队', flag: '🇯🇵', group: 'F', keyPlayers: '久保建英、三笘薰、远藤航', strength: 82, info: '最强亚洲队' },
    '挪威': { tier: '一线强队', flag: '🇳🇴', group: 'I', keyPlayers: '哈兰德、厄德高、索尔洛特', strength: 81, info: '1998年后首次重返' },
    '美国': { tier: '二线/东道主', flag: '🇺🇸', group: 'D', keyPlayers: '普利西奇、麦肯尼、巴洛贡', strength: 78, info: '东道主' },
    '墨西哥': { tier: '二线/东道主', flag: '🇲🇽', group: 'A', keyPlayers: '希门尼斯、S·希门尼斯', strength: 79, info: '东道主揭幕战' },
    '加拿大': { tier: '二线/东道主', flag: '🇨🇦', group: 'B', keyPlayers: '戴维斯、乔纳森·戴维', strength: 76, info: '东道主' },
    '瑞士': { tier: '二线/东道主', flag: '🇨🇭', group: 'B', keyPlayers: '扎卡领衔', strength: 80, info: '大赛常客' },
    '韩国': { tier: '二线/东道主', flag: '🇰🇷', group: 'A', keyPlayers: '孙兴慜、李刚仁、金玟哉', strength: 77, info: '亚洲二号种子' },
    '土耳其': { tier: '二线/东道主', flag: '🇹🇷', group: 'D', keyPlayers: '居莱尔、恰尔汗奥卢、耶尔德兹', strength: 76, info: '天赋爆棚青年军' },
    '瑞典': { tier: '二线/东道主', flag: '🇸🇪', group: 'F', keyPlayers: '伊萨克、哲凯赖什', strength: 75, info: '双枪锋线' },
    '奥地利': { tier: '二线/东道主', flag: '🇦🇹', group: 'J', keyPlayers: '萨比策、莱默', strength: 78, info: '1998后首进世界杯' },
    '比利时': { tier: '二线/东道主', flag: '🇧🇪', group: 'G', keyPlayers: '德布劳内、多库、奥彭达', strength: 79, info: '黄金一代重建期' },
    '塞内加尔': { tier: '二线/东道主', flag: '🇸🇳', group: 'I', keyPlayers: '马内领衔', strength: 77, info: '非洲二号实力' },
    '厄瓜多尔': { tier: '二线/东道主', flag: '🇪🇨', group: 'E', keyPlayers: '凯塞多领衔', strength: 76, info: '南美区预选赛惊喜' },
    '埃及': { tier: '二线/东道主', flag: '🇪🇬', group: 'G', keyPlayers: '萨拉赫领衔', strength: 75, info: '萨拉赫时隔八年重返' },
    '澳大利亚': { tier: '二线/东道主', flag: '🇦🇺', group: 'D', keyPlayers: '波波维奇执教', strength: 74, info: '整体顽强' },
    '苏格兰': { tier: '二线/东道主', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', group: 'C', keyPlayers: '麦克托米奈、罗伯逊', strength: 73, info: '1998后首次晋级' },
    '捷克': { tier: '中游/新军', flag: '🇨🇿', group: 'A', keyPlayers: '希克领衔', strength: 72, info: '附加赛晋级' },
    '波黑': { tier: '中游/新军', flag: '🇧🇦', group: 'B', keyPlayers: '哲科40岁最后一舞', strength: 70, info: '2014后首进决赛圈' },
    '卡塔尔': { tier: '中游/新军', flag: '🇶🇦', group: 'B', keyPlayers: '亚洲杯两连冠底子', strength: 71, info: '2022东道主后首次靠实力晋级' },
    '巴拉圭': { tier: '中游/新军', flag: '🇵🇾', group: 'D', keyPlayers: '阿尔法罗执教', strength: 71, info: '2010后首进世界杯' },
    '科特迪瓦': { tier: '中游/新军', flag: '🇨🇮', group: 'E', keyPlayers: '2023非洲杯冠军', strength: 73, info: '非洲前三实力' },
    '突尼斯': { tier: '中游/新军', flag: '🇹🇳', group: 'F', keyPlayers: '防守强进攻弱', strength: 70, info: '预选赛零失球' },
    '伊朗': { tier: '中游/新军', flag: '🇮🇷', group: 'G', keyPlayers: '塔雷米领衔', strength: 72, info: '亚洲老牌劲旅' },
    '新西兰': { tier: '中游/新军', flag: '🇳🇿', group: 'G', keyPlayers: '克里斯·伍德', strength: 68, info: '大洋洲直通名额' },
    '沙特': { tier: '中游/新军', flag: '🇸🇦', group: 'H', keyPlayers: '勒纳尔回归执教', strength: 71, info: '2022爆冷击败阿根廷' },
    '阿尔及利亚': { tier: '中游/新军', flag: '🇩🇿', group: 'J', keyPlayers: '马赫雷斯、阿穆拉', strength: 72, info: '非洲技术流' },
    '加纳': { tier: '中游/新军', flag: '🇬🇭', group: 'L', keyPlayers: '库杜斯领衔', strength: 71, info: '回归决赛圈' },
    '巴拿马': { tier: '中游/新军', flag: '🇵🇦', group: 'L', keyPlayers: '中北美硬骨头', strength: 69, info: '2018后再进决赛圈' },
    '伊拉克': { tier: '中游/新军', flag: '🇮🇶', group: 'I', keyPlayers: '附加赛晋级', strength: 70, info: '1986后首次晋级' },
    '乌兹别克斯坦': { tier: '中游/新军', flag: '🇺🇿', group: 'K', keyPlayers: '历史首次晋级', strength: 69, info: '中亚足球里程碑' },
    '约旦': { tier: '中游/新军', flag: '🇯🇴', group: 'J', keyPlayers: '历史首次晋级', strength: 68, info: '2024亚洲杯亚军班底' },
    '南非': { tier: '中游/新军', flag: '🇿🇦', group: 'A', keyPlayers: '2010后首进决赛圈', strength: 67, info: '揭幕战对手' },
    '海地': { tier: '中游/新军', flag: '🇭🇹', group: 'C', keyPlayers: '1974后首次晋级', strength: 65, info: '励志新军' },
    '库拉索': { tier: '中游/新军', flag: '🇨🇼', group: 'E', keyPlayers: '史上人口最少参赛国', strength: 64, info: '阿德沃卡特执教的传奇' },
    '佛得角': { tier: '中游/新军', flag: '🇨🇻', group: 'H', keyPlayers: '历史首次晋级', strength: 66, info: '非洲岛国奇迹' },
    '刚果金': { tier: '中游/新军', flag: '🇨🇩', group: 'K', keyPlayers: '1974扎伊尔后首次', strength: 68, info: '洲际附加赛杀出' }
};

// 比赛真实结果存储 (比赛结束后更新)
const matchResults = JSON.parse(localStorage.getItem('worldcup_results') || '{}');

// 保存比赛结果到本地存储
function saveMatchResult(matchId, homeScore, awayScore, status = 'finished') {
    matchResults[matchId] = {
        homeScore: homeScore,
        awayScore: awayScore,
        status: status, // 'finished' | 'live' | 'upcoming'
        updatedAt: new Date().toISOString()
    };
    localStorage.setItem('worldcup_results', JSON.stringify(matchResults));
    renderGroups(); // 刷新显示
}

// 获取比赛结果
function getMatchResult(matchId) {
    return matchResults[matchId] || null;
}

// 检测预测是否命中
function checkPredictionMatch(home, away, actualHomeScore, actualAwayScore) {
    const prediction = generatePrediction(home, away);
    const actualScore = `${actualHomeScore}-${actualAwayScore}`;

    // 检查是否在Top 3预测中
    const matchedIndex = prediction.scores.findIndex(s => s.score === actualScore);

    if (matchedIndex === 0) {
        return { hit: true, level: 'perfect', label: '🎯 神预测', desc: '命中最可能比分！' };
    } else if (matchedIndex === 1) {
        return { hit: true, level: 'great', label: '✨ 准', desc: '命中次可能比分' };
    } else if (matchedIndex === 2) {
        return { hit: true, level: 'good', label: '✓ 中', desc: '命中第三可能比分' };
    }

    // 检查是否命中胜负关系
    const predTop = prediction.scores[0].score;
    const [predHome, predAway] = predTop.split('-').map(Number);
    const predDiff = predHome - predAway;
    const actualDiff = actualHomeScore - actualAwayScore;

    if ((predDiff > 0 && actualDiff > 0) || (predDiff < 0 && actualDiff < 0) || (predDiff === 0 && actualDiff === 0)) {
        return { hit: true, level: 'direction', label: '→ 方向对', desc: '命中胜负/平局方向' };
    }

    return { hit: false, level: 'miss', label: '✗ 未中', desc: '预测偏差较大' };
}

// 清除所有结果（重置）
function clearAllResults() {
    localStorage.removeItem('worldcup_results');
    Object.keys(matchResults).forEach(key => delete matchResults[key]);
    renderGroups();
}

// 从网络同步比分数据
async function syncScoresFromCloud() {
    // ========== 配置你的数据源 ==========
    // 把比分文件托管在以下任一位置：
    // 1. GitHub: https://raw.githubusercontent.com/你的用户名/仓库名/main/scores.json
    // 2. Gist: https://gist.githubusercontent.com/你的用户名/gistID/raw/scores.json
    // 3. 七牛云/阿里云OSS: https://你的域名.com/scores.json
    // 4. 自己的服务器: https://yourserver.com/api/scores
    // ======================================

    const dataUrls = [
        'https://raw.githubusercontent.com/juanmao233333-cloud/worldcup2026-scores/refs/heads/main/scores.json',
    ];

    // 如果没有配置数据源，返回提示
    if (dataUrls.length === 0 || dataUrls[0].includes('yourusername')) {
        console.log('⚠️ 未配置数据源，请修改 app.js 中的 dataUrls');
        return { success: false, error: '未配置数据源' };
    }

    for (const url of dataUrls) {
        try {
            const response = await fetch(url + '?t=' + Date.now(), {
                method: 'GET',
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                const data = await response.json();

                if (data.matches && Array.isArray(data.matches)) {
                    data.matches.forEach(match => {
                        if (match.home && match.away && typeof match.homeScore === 'number' && typeof match.awayScore === 'number') {
                            const matchId = `${match.home}-${match.away}`;
                            matchResults[matchId] = {
                                homeScore: match.homeScore,
                                awayScore: match.awayScore,
                                status: match.status || 'finished',
                                updatedAt: new Date().toISOString(),
                                syncedFromCloud: true
                            };
                        }
                    });

                    localStorage.setItem('worldcup_results', JSON.stringify(matchResults));
                    renderGroups();

                    console.log(`✓ 成功同步比分数据: ${data.matches.length} 场比赛`);
                    return { success: true, count: data.matches.length };
                }
            }
        } catch (error) {
            console.log(`✗ 同步失败: ${url}`, error.message);
            continue;
        }
    }

    return { success: false, error: '无法连接到数据源' };
}

// 启动时自动同步（可选）
function autoSyncOnStartup() {
    const lastSync = localStorage.getItem('worldcup_lastSync');
    const now = Date.now();

    // 每10分钟自动同步一次
    if (!lastSync || (now - parseInt(lastSync)) > 10 * 60 * 1000) {
        syncScoresFromCloud().then(result => {
            if (result.success) {
                localStorage.setItem('worldcup_lastSync', now.toString());
            }
        });
    }
}

// 手动同步按钮触发
async function manualSync() {
    const btn = document.getElementById('syncBtn');
    if (btn) {
        btn.textContent = '⏳ 同步中...';
        btn.disabled = true;
    }

    const result = await syncScoresFromCloud();

    if (btn) {
        btn.textContent = result.success ? '✓ 同步成功' : '✗ 同步失败';
        btn.disabled = false;
        setTimeout(() => {
            btn.textContent = '🔄 同步比分';
        }, 2000);
    }

    if (result.success) {
        alert(`同步成功！已更新 ${result.count} 场比赛结果`);
    } else {
        alert('同步失败，请检查网络连接或稍后再试');
    }
}

// 实际北京时间映射表（key: 主队-客队，value: {date, time}）
const beijingTimeMap = {
    // 第一轮 - 6月12日
    '墨西哥-南非': { date: '6月12日', time: '03:00' },
    '韩国-捷克': { date: '6月12日', time: '10:00' },
    // 第一轮 - 6月13日
    '加拿大-波黑': { date: '6月13日', time: '03:00' },
    '美国-巴拉圭': { date: '6月13日', time: '09:00' },
    // 第一轮 - 6月14日
    '卡塔尔-瑞士': { date: '6月14日', time: '03:00' },
    '巴西-摩洛哥': { date: '6月14日', time: '06:00' },
    '海地-苏格兰': { date: '6月14日', time: '09:00' },
    '澳大利亚-土耳其': { date: '6月14日', time: '12:00' },
    // 第一轮 - 6月15日
    '德国-库拉索': { date: '6月15日', time: '01:00' },
    '荷兰-日本': { date: '6月15日', time: '04:00' },
    '科特迪瓦-厄瓜多尔': { date: '6月15日', time: '07:00' },
    '瑞典-突尼斯': { date: '6月15日', time: '10:00' },
    // 第一轮 - 6月16日
    '西班牙-佛得角': { date: '6月16日', time: '00:00' },
    '比利时-埃及': { date: '6月16日', time: '03:00' },
    '沙特-乌拉圭': { date: '6月16日', time: '06:00' },
    '伊朗-新西兰': { date: '6月16日', time: '09:00' },
    // 第一轮 - 6月17日
    '法国-塞内加尔': { date: '6月17日', time: '03:00' },
    '伊拉克-挪威': { date: '6月17日', time: '06:00' },
    '阿根廷-阿尔及利亚': { date: '6月17日', time: '09:00' },
    '奥地利-约旦': { date: '6月17日', time: '12:00' },
    // 第一轮 - 6月18日
    '葡萄牙-刚果金': { date: '6月18日', time: '01:00' },
    '英格兰-克罗地亚': { date: '6月18日', time: '04:00' },
    '加纳-巴拿马': { date: '6月18日', time: '07:00' },
    '乌兹别克斯坦-哥伦比亚': { date: '6月18日', time: '10:00' },
    // 第二轮 - 6月19日
    '捷克-南非': { date: '6月19日', time: '00:00' },
    '瑞士-波黑': { date: '6月19日', time: '03:00' },
    '加拿大-卡塔尔': { date: '6月19日', time: '06:00' },
    '墨西哥-韩国': { date: '6月19日', time: '09:00' },
    // 第二轮 - 6月20日
    '美国-澳大利亚': { date: '6月20日', time: '03:00' },
    '苏格兰-摩洛哥': { date: '6月20日', time: '06:00' },
    '巴西-海地': { date: '6月20日', time: '08:30' },
    '土耳其-巴拉圭': { date: '6月20日', time: '11:00' },
    // 第二轮 - 6月21日
    '荷兰-瑞典': { date: '6月21日', time: '01:00' },
    '德国-科特迪瓦': { date: '6月21日', time: '04:00' },
    '厄瓜多尔-库拉索': { date: '6月21日', time: '08:00' },
    '突尼斯-日本': { date: '6月21日', time: '12:00' },
    // 第二轮 - 6月22日
    '西班牙-沙特': { date: '6月22日', time: '00:00' },
    '比利时-伊朗': { date: '6月22日', time: '03:00' },
    '乌拉圭-佛得角': { date: '6月22日', time: '06:00' },
    '新西兰-埃及': { date: '6月22日', time: '09:00' },
    // 第二轮 - 6月23日
    '阿根廷-奥地利': { date: '6月23日', time: '01:00' },
    '法国-伊拉克': { date: '6月23日', time: '05:00' },
    '挪威-塞内加尔': { date: '6月23日', time: '08:00' },
    '约旦-阿尔及利亚': { date: '6月23日', time: '11:00' },
    // 第二轮 - 6月24日
    '英格兰-加纳': { date: '6月24日', time: '01:00' },
    '葡萄牙-乌兹别克斯坦': { date: '6月24日', time: '04:00' },
    '刚果金-哥伦比亚': { date: '6月24日', time: '07:00' },
    '巴拿马-克罗地亚': { date: '6月24日', time: '10:00' },
    // 第三轮 - 6月25日
    '波黑-卡塔尔': { date: '6月25日', time: '03:00' },
    '瑞士-加拿大': { date: '6月25日', time: '03:00' },
    '苏格兰-巴西': { date: '6月25日', time: '06:00' },
    '摩洛哥-海地': { date: '6月25日', time: '06:00' },
    '南非-韩国': { date: '6月25日', time: '09:00' },
    '捷克-墨西哥': { date: '6月25日', time: '09:00' },
    // 第三轮 - 6月26日
    '库拉索-科特迪瓦': { date: '6月26日', time: '04:00' },
    '厄瓜多尔-德国': { date: '6月26日', time: '04:00' },
    '日本-瑞典': { date: '6月26日', time: '07:00' },
    '突尼斯-荷兰': { date: '6月26日', time: '07:00' },
    '土耳其-美国': { date: '6月26日', time: '10:00' },
    '巴拉圭-澳大利亚': { date: '6月26日', time: '10:00' },
    // 第三轮 - 6月27日
    '塞内加尔-伊拉克': { date: '6月27日', time: '03:00' },
    '挪威-法国': { date: '6月27日', time: '03:00' },
    '乌拉圭-西班牙': { date: '6月27日', time: '08:00' },
    '佛得角-沙特': { date: '6月27日', time: '08:00' },
    '埃及-伊朗': { date: '6月27日', time: '11:00' },
    '新西兰-比利时': { date: '6月27日', time: '11:00' },
    // 第三轮 - 6月28日
    '克罗地亚-加纳': { date: '6月28日', time: '05:00' },
    '巴拿马-英格兰': { date: '6月28日', time: '05:00' },
    '哥伦比亚-葡萄牙': { date: '6月28日', time: '07:30' },
    '刚果金-乌兹别克斯坦': { date: '6月28日', time: '07:30' },
    '阿尔及利亚-奥地利': { date: '6月28日', time: '10:00' },
    '约旦-阿根廷': { date: '6月28日', time: '10:00' }
};

// 时间转换：使用映射表获取实际北京时间
function convertToBeijingTime(match) {
    const key = `${match.home}-${match.away}`;

    // 如果在映射表中找到，直接返回
    if (beijingTimeMap[key]) {
        return beijingTimeMap[key];
    }

    // 没找到则返回原始时间（备用）
    return { date: match.date, time: match.time };
}

// 为每场比赛添加北京时间
function getMatchesWithBeijingTime() {
    return groupStageMatches.map(match => {
        const beijing = convertToBeijingTime(match);
        return {
            ...match,
            beijingDate: beijing.date,
            beijingTime: beijing.time
        };
    });
}
const groupStageMatches = [
    { group: 'A', home: '墨西哥', away: '南非', date: '6月11日', time: '20:00' },
    { group: 'A', home: '韩国', away: '捷克', date: '6月11日', time: '23:00' },
    { group: 'A', home: '韩国', away: '南非', date: '6月17日', time: '20:00' },
    { group: 'A', home: '墨西哥', away: '捷克', date: '6月17日', time: '23:00' },
    { group: 'A', home: '捷克', away: '南非', date: '6月23日', time: '20:00' },
    { group: 'A', home: '墨西哥', away: '韩国', date: '6月23日', time: '20:00' },
    { group: 'B', home: '加拿大', away: '波黑', date: '6月12日', time: '20:00' },
    { group: 'B', home: '卡塔尔', away: '瑞士', date: '6月12日', time: '23:00' },
    { group: 'B', home: '加拿大', away: '卡塔尔', date: '6月18日', time: '20:00' },
    { group: 'B', home: '波黑', away: '瑞士', date: '6月18日', time: '23:00' },
    { group: 'B', home: '瑞士', away: '加拿大', date: '6月24日', time: '20:00' },
    { group: 'B', home: '波黑', away: '卡塔尔', date: '6月24日', time: '20:00' },
    { group: 'C', home: '巴西', away: '摩洛哥', date: '6月12日', time: '20:00' },
    { group: 'C', home: '海地', away: '苏格兰', date: '6月12日', time: '23:00' },
    { group: 'C', home: '巴西', away: '海地', date: '6月18日', time: '20:00' },
    { group: 'C', home: '摩洛哥', away: '苏格兰', date: '6月18日', time: '23:00' },
    { group: 'C', home: '苏格兰', away: '巴西', date: '6月24日', time: '20:00' },
    { group: 'C', home: '摩洛哥', away: '海地', date: '6月24日', time: '20:00' },
    { group: 'D', home: '美国', away: '巴拉圭', date: '6月12日', time: '20:00' },
    { group: 'D', home: '澳大利亚', away: '土耳其', date: '6月12日', time: '23:00' },
    { group: 'D', home: '美国', away: '澳大利亚', date: '6月18日', time: '20:00' },
    { group: 'D', home: '巴拉圭', away: '土耳其', date: '6月18日', time: '23:00' },
    { group: 'D', home: '土耳其', away: '美国', date: '6月24日', time: '20:00' },
    { group: 'D', home: '巴拉圭', away: '澳大利亚', date: '6月24日', time: '20:00' },
    { group: 'E', home: '德国', away: '库拉索', date: '6月13日', time: '20:00' },
    { group: 'E', home: '科特迪瓦', away: '厄瓜多尔', date: '6月13日', time: '23:00' },
    { group: 'E', home: '德国', away: '科特迪瓦', date: '6月19日', time: '20:00' },
    { group: 'E', home: '库拉索', away: '厄瓜多尔', date: '6月19日', time: '23:00' },
    { group: 'E', home: '厄瓜多尔', away: '德国', date: '6月25日', time: '20:00' },
    { group: 'E', home: '库拉索', away: '科特迪瓦', date: '6月25日', time: '20:00' },
    { group: 'F', home: '荷兰', away: '日本', date: '6月13日', time: '20:00' },
    { group: 'F', home: '瑞典', away: '突尼斯', date: '6月13日', time: '23:00' },
    { group: 'F', home: '荷兰', away: '瑞典', date: '6月19日', time: '20:00' },
    { group: 'F', home: '日本', away: '突尼斯', date: '6月19日', time: '23:00' },
    { group: 'F', home: '突尼斯', away: '荷兰', date: '6月25日', time: '20:00' },
    { group: 'F', home: '日本', away: '瑞典', date: '6月25日', time: '20:00' },
    { group: 'G', home: '比利时', away: '埃及', date: '6月14日', time: '20:00' },
    { group: 'G', home: '伊朗', away: '新西兰', date: '6月14日', time: '23:00' },
    { group: 'G', home: '比利时', away: '伊朗', date: '6月20日', time: '20:00' },
    { group: 'G', home: '埃及', away: '新西兰', date: '6月20日', time: '23:00' },
    { group: 'G', home: '新西兰', away: '比利时', date: '6月26日', time: '20:00' },
    { group: 'G', home: '埃及', away: '伊朗', date: '6月26日', time: '20:00' },
    { group: 'H', home: '西班牙', away: '佛得角', date: '6月14日', time: '20:00' },
    { group: 'H', home: '沙特', away: '乌拉圭', date: '6月14日', time: '23:00' },
    { group: 'H', home: '西班牙', away: '沙特', date: '6月20日', time: '20:00' },
    { group: 'H', home: '佛得角', away: '乌拉圭', date: '6月20日', time: '23:00' },
    { group: 'H', home: '乌拉圭', away: '西班牙', date: '6月26日', time: '20:00' },
    { group: 'H', home: '佛得角', away: '沙特', date: '6月26日', time: '20:00' },
    { group: 'I', home: '法国', away: '塞内加尔', date: '6月15日', time: '20:00' },
    { group: 'I', home: '伊拉克', away: '挪威', date: '6月15日', time: '23:00' },
    { group: 'I', home: '法国', away: '伊拉克', date: '6月21日', time: '20:00' },
    { group: 'I', home: '塞内加尔', away: '挪威', date: '6月21日', time: '23:00' },
    { group: 'I', home: '挪威', away: '法国', date: '6月27日', time: '20:00' },
    { group: 'I', home: '塞内加尔', away: '伊拉克', date: '6月27日', time: '20:00' },
    { group: 'J', home: '阿根廷', away: '阿尔及利亚', date: '6月15日', time: '20:00' },
    { group: 'J', home: '奥地利', away: '约旦', date: '6月15日', time: '23:00' },
    { group: 'J', home: '阿根廷', away: '奥地利', date: '6月21日', time: '20:00' },
    { group: 'J', home: '阿尔及利亚', away: '约旦', date: '6月21日', time: '23:00' },
    { group: 'J', home: '约旦', away: '阿根廷', date: '6月27日', time: '20:00' },
    { group: 'J', home: '阿尔及利亚', away: '奥地利', date: '6月27日', time: '20:00' },
    { group: 'K', home: '葡萄牙', away: '刚果金', date: '6月16日', time: '20:00' },
    { group: 'K', home: '乌兹别克斯坦', away: '哥伦比亚', date: '6月16日', time: '23:00' },
    { group: 'K', home: '葡萄牙', away: '乌兹别克斯坦', date: '6月22日', time: '20:00' },
    { group: 'K', home: '刚果金', away: '哥伦比亚', date: '6月22日', time: '23:00' },
    { group: 'K', home: '哥伦比亚', away: '葡萄牙', date: '6月27日', time: '20:00' },
    { group: 'K', home: '刚果金', away: '乌兹别克斯坦', date: '6月27日', time: '20:00' },
    { group: 'L', home: '英格兰', away: '克罗地亚', date: '6月16日', time: '20:00' },
    { group: 'L', home: '加纳', away: '巴拿马', date: '6月16日', time: '23:00' },
    { group: 'L', home: '英格兰', away: '加纳', date: '6月22日', time: '20:00' },
    { group: 'L', home: '克罗地亚', away: '巴拿马', date: '6月22日', time: '23:00' },
    { group: 'L', home: '巴拿马', away: '英格兰', date: '6月27日', time: '20:00' },
    { group: 'L', home: '克罗地亚', away: '加纳', date: '6月27日', time: '20:00' }
];

const favorites = JSON.parse(localStorage.getItem('worldcup_favorites') || '[]');

// AI预测引擎
function generatePrediction(home, away) {
    const homeTeam = teamsDB[home];
    const awayTeam = teamsDB[away];
    const strengthDiff = homeTeam.strength - awayTeam.strength;
    const homeAdvantage = 3;
    let homeWinProb = 33 + (strengthDiff + homeAdvantage) * 1.5;
    let awayWinProb = 33 - (strengthDiff + homeAdvantage) * 1.5;
    homeWinProb = Math.max(15, Math.min(75, homeWinProb));
    awayWinProb = Math.max(15, Math.min(75, awayWinProb));
    let drawProb = 100 - homeWinProb - awayWinProb;
    const total = homeWinProb + drawProb + awayWinProb;
    homeWinProb = Math.round(homeWinProb / total * 100);
    awayWinProb = Math.round(awayWinProb / total * 100);
    drawProb = 100 - homeWinProb - awayWinProb;

    const scores = generateTop3Scores(home, away, homeWinProb, drawProb, awayWinProb, strengthDiff);
    const halfFullTime = generateHalfFullTime(homeWinProb, drawProb, awayWinProb, strengthDiff);
    const totalGoals = generateTotalGoals(homeWinProb, drawProb, awayWinProb, strengthDiff);
    const keyFactors = generateKeyFactors(home, away, strengthDiff);
    const confidence = determineConfidence(homeWinProb, drawProb, awayWinProb, Math.abs(strengthDiff));
    const analysis = generateAnalysis(home, away, homeWinProb, drawProb, awayWinProb, scores[0].score);
    const playersToWatch = [
        { team: home, player: homeTeam.keyPlayers.split('、')[0], reason: getPlayerReason(home, homeTeam) },
        { team: away, player: awayTeam.keyPlayers.split('、')[0], reason: getPlayerReason(away, awayTeam) }
    ];

    return { homeWin: homeWinProb, draw: drawProb, awayWin: awayWinProb, scores, halfFullTime, totalGoals, confidence, keyFactors, analysis, playersToWatch };
}

function generateTop3Scores(home, away, homeWin, draw, awayWin, strengthDiff) {
    const scores = [];
    if (strengthDiff > 15) {
        if (homeWin > draw && homeWin > awayWin) {
            scores.push({ score: '3-0', prob: Math.round(homeWin * 0.35) });
            scores.push({ score: '2-0', prob: Math.round(homeWin * 0.30) });
            scores.push({ score: '2-1', prob: Math.round(homeWin * 0.20) });
        } else {
            scores.push({ score: '2-0', prob: Math.round(homeWin * 0.35) });
            scores.push({ score: '1-0', prob: Math.round(homeWin * 0.30) });
            scores.push({ score: '0-0', prob: Math.round(draw * 0.40) });
        }
    } else if (strengthDiff > 5) {
        scores.push({ score: '2-1', prob: Math.round(homeWin * 0.30) });
        scores.push({ score: '1-0', prob: Math.round(homeWin * 0.25) });
        scores.push({ score: '1-1', prob: Math.round(draw * 0.40) });
    } else if (strengthDiff > -5) {
        scores.push({ score: '1-1', prob: Math.round(draw * 0.35) });
        if (homeWin > awayWin) {
            scores.push({ score: '2-1', prob: Math.round(homeWin * 0.25) });
            scores.push({ score: '1-0', prob: Math.round(homeWin * 0.20) });
        } else {
            scores.push({ score: '1-2', prob: Math.round(awayWin * 0.25) });
            scores.push({ score: '0-1', prob: Math.round(awayWin * 0.20) });
        }
    } else if (strengthDiff > -15) {
        scores.push({ score: '1-2', prob: Math.round(awayWin * 0.30) });
        scores.push({ score: '0-1', prob: Math.round(awayWin * 0.25) });
        scores.push({ score: '1-1', prob: Math.round(draw * 0.40) });
    } else {
        scores.push({ score: '0-2', prob: Math.round(awayWin * 0.30) });
        scores.push({ score: '1-2', prob: Math.round(awayWin * 0.25) });
        scores.push({ score: '0-1', prob: Math.round(awayWin * 0.25) });
    }
    return scores;
}

// 半全场胜平负预测
function generateHalfFullTime(homeWin, draw, awayWin, strengthDiff) {
    const absDiff = Math.abs(strengthDiff);

    // 半场结果分布：平局概率通常比全场高（上半场更难进球）
    // 半场平局概率约40-50%，全场平局是传入的draw值
    const halfDrawBase = Math.min(50, draw * 1.4 + 10); // 半场平局通常40-50%
    const halfHomeWin = (100 - halfDrawBase) * (homeWin / (homeWin + awayWin));
    const halfAwayWin = 100 - halfDrawBase - halfHomeWin;

    // 全场概率
    const fWin = homeWin / 100;
    const fDraw = draw / 100;
    const fAway = awayWin / 100;

    // hXfY = P(半场=X) * P(全场=Y|半场=X)
    // 条件概率：如果半场已领先，全场保持领先概率很高
    // 如果半场平，全场结果接近原始胜率分布

    const hWin = halfHomeWin / 100;
    const hDraw = halfDrawBase / 100;
    const hAway = halfAwayWin / 100;

    // 强队领先时全场保持领先概率高
    const holdLeadProb = 0.75; // 半场领先者全场保持不败的概率
    const drawToWinProb = 0.55; // 半场平，全场分胜负的概率

    const combinations = [
        { code: 'HH', name: '主/主', desc: '半场主胜/全场主胜', prob: hWin * fWin * 1.2 },
        { code: 'HD', name: '主/平', desc: '半场主胜/全场平局', prob: hWin * fDraw * 0.6 },
        { code: 'HA', name: '主/客', desc: '半场主胜/全场客胜', prob: hWin * fAway * 0.3 },
        { code: 'DH', name: '平/主', desc: '半场平局/全场主胜', prob: hDraw * fWin * 0.9 },
        { code: 'DD', name: '平/平', desc: '半场平局/全场平局', prob: hDraw * fDraw * 1.1 },
        { code: 'DA', name: '平/客', desc: '半场平局/全场客胜', prob: hDraw * fAway * 0.9 },
        { code: 'AH', name: '客/主', desc: '半场客胜/全场主胜', prob: hAway * fWin * 0.3 },
        { code: 'AD', name: '客/平', desc: '半场客胜/全场平局', prob: hAway * fDraw * 0.6 },
        { code: 'AA', name: '客/客', desc: '半场客胜/全场客胜', prob: hAway * fAway * 1.2 }
    ];

    // 归一化并取Top 3
    const totalProb = combinations.reduce((sum, c) => sum + c.prob, 0);
    combinations.forEach(c => c.prob = Math.round(c.prob / totalProb * 100));

    return combinations
        .sort((a, b) => b.prob - a.prob)
        .slice(0, 3)
        .map(c => ({ code: c.code, name: c.name, desc: c.desc, prob: c.prob }));
}

// 总进球数预测
function generateTotalGoals(homeWin, draw, awayWin, strengthDiff) {
    const absDiff = Math.abs(strengthDiff);

    // 使用权重系统，避免midRange固定过高
    let under2W, midRangeW, over3W;

    if (absDiff > 15) {
        // 实力悬殊：大球概率高（强队虐菜）
        under2W = 15;
        over3W = 40;
        midRangeW = 35;
    } else if (absDiff > 8) {
        // 实力差距明显
        under2W = 22;
        over3W = 28;
        midRangeW = 40;
    } else if (absDiff > 3) {
        // 有一定差距
        under2W = 28;
        over3W = 22;
        midRangeW = 42;
    } else {
        // 实力接近
        if (draw > 40) {
            // 势均力敌且平局概率高 = 谨慎的比赛，小球
            under2W = 42;
            midRangeW = 38;
            over3W = 15;
        } else {
            // 势均力敌但可能分出胜负
            under2W = 25;
            midRangeW = 45;
            over3W = 25;
        }
    }

    // 平局概率高时进一步降低进球期望
    if (draw > 35) {
        const shift = (draw - 35) * 0.8;
        under2W += shift;
        over3W = Math.max(8, over3W - shift * 0.7);
        midRangeW = Math.max(25, midRangeW - shift * 0.3);
    }

    // 归一化为百分比
    const totalW = under2W + midRangeW + over3W;
    let u2 = Math.round(under2W / totalW * 100);
    let m3 = Math.round(midRangeW / totalW * 100);
    let o3 = 100 - u2 - m3;

    // 确保合理性：至少8%
    if (o3 < 8) { o3 = 8; m3 -= 4; u2 -= 4; }
    if (u2 < 8) { u2 = 8; m3 -= 4; o3 -= 4; }

    const results = [
        { range: '0-1球', label: '小球', prob: u2, desc: u2 > 35 ? '预计进球较少' : '防守大战，进球少' },
        { range: '2-3球', label: '中球', prob: m3, desc: '正常进球数' },
        { range: '4+球', label: '大球', prob: o3, desc: o3 > 30 ? '实力悬殊，进球较多' : '对攻大战，进球多' }
    ];

    // 根据最高概率项调整描述
    const maxProb = Math.max(u2, m3, o3);
    if (maxProb === u2 && u2 > 35) {
        results[0].desc = '预计是一场谨慎的防守战';
    } else if (maxProb === o3 && o3 > 30) {
        results[2].desc = '实力悬殊，预计进球较多';
    }

    return results.sort((a, b) => b.prob - a.prob);
}

function generateKeyFactors(home, away, strengthDiff) {
    const factors = [];
    const homeTeam = teamsDB[home];
    const awayTeam = teamsDB[away];
    if (homeTeam.tier === '夺冠热门') factors.push(`${home}近期状态顶级，大赛经验丰富`);
    else if (homeTeam.tier === '一线强队') factors.push(`${home}预选赛表现强势，阵容稳定`);
    else if (['美国', '墨西哥', '加拿大'].includes(home)) factors.push(`${home}坐拥主场之利，球迷支持巨大`);
    if (strengthDiff > 10) factors.push(`${home}整体实力明显占优`);
    else if (strengthDiff < -10) factors.push(`${away}纸面实力更胜一筹`);
    else factors.push('两队实力接近，胜负取决于临场发挥');
    if (homeTeam.keyPlayers.includes('哈兰德') || homeTeam.keyPlayers.includes('姆巴佩')) factors.push(`${home}拥有顶级锋线杀手`);
    if (awayTeam.keyPlayers.includes('梅西')) factors.push(`${away}拥有梅西坐镇，大赛抗压能力极强`);
    if (homeTeam.info.includes('首次') || awayTeam.info.includes('首次')) factors.push('新军球队大赛经验不足是潜在隐患');
    return factors.slice(0, 4);
}

function determineConfidence(homeWin, draw, awayWin, strengthDiff) {
    const maxProb = Math.max(homeWin, draw, awayWin);
    if (maxProb > 55 && strengthDiff > 10) return '高';
    if (maxProb > 45 || strengthDiff > 8) return '中';
    return '低';
}

function generateAnalysis(home, away, homeWin, draw, awayWin, topScore) {
    const homeTeam = teamsDB[home];
    const awayTeam = teamsDB[away];
    const strengthDiff = homeTeam.strength - awayTeam.strength;
    let analysis = '';
    if (strengthDiff > 15) {
        analysis = `${home}作为${homeTeam.tier === '夺冠热门' ? '夺冠大热' : '强队'}，面对${away}占据明显优势。${homeTeam.keyPlayers.split('、')[0]}领衔的阵容实力更胜一筹，预计${topScore}取胜。`;
    } else if (strengthDiff > 5) {
        analysis = `${home}主场作战占据一定优势。但${away}绝非鱼腩，预计是一场${topScore}的激战。`;
    } else if (strengthDiff > -5) {
        analysis = `两队实力伯仲之间，${home}有主场之利。这场${topScore}的平局可能性不低。`;
    } else if (strengthDiff > -15) {
        analysis = `${away}整体实力稍占上风，${awayTeam.keyPlayers.split('、')[0]}是关键。${home}主场力争${topScore}逼平对手。`;
    } else {
        analysis = `${away}作为${awayTeam.tier}，面对${home}优势明显。预计${topScore}轻松拿下。`;
    }
    return analysis;
}

function getPlayerReason(teamName, team) {
    const reasons = {
        '梅西': '39岁最后一届，迈阿密国际状态正佳',
        '亚马尔': '18岁现象级，2024欧洲杯大放异彩',
        '姆巴佩': '皇马队长，巅峰期射手王',
        '凯恩': '英格兰队长，图赫尔体系核心',
        'C罗': '41岁最后一舞，2025欧国联冠军队长',
        '哈兰德': '曼城神锋，预选赛进球如麻',
        '孙兴慜': '亚洲一哥，洛杉矶FC经验丰富',
        '萨拉赫': '利物浦核心，时隔八年重返世界杯',
        '德布劳内': '世界第一中场，34岁仍巅峰'
    };
    const player = team.keyPlayers.split('、')[0];
    return reasons[player] || `${team.tier}核心，${team.info.substring(0, 20)}`;
}

// UI渲染函数
let currentDateFilter = 'all';

function init() {
    renderGroups();
    renderBracket();
    renderTeams();
    renderFavorites();
    startCountdown();
    setupEventListeners();

    // 启动时自动同步比分（延迟2秒，让页面先渲染完成）
    setTimeout(() => {
        autoSyncOnStartup();
    }, 2000);
}

function renderGroups() {
    const container = document.getElementById('groupsContainer');
    const matchesWithBeijingTime = getMatchesWithBeijingTime();
    let matchesToShow = matchesWithBeijingTime;

    // 按日期筛选（使用北京时间）
    if (currentDateFilter !== 'all') {
        matchesToShow = matchesWithBeijingTime.filter(m => m.beijingDate === currentDateFilter);
        // 按日期分组展示 - 占满全宽
        container.innerHTML = `
            <div class="date-section">
                <div class="date-header">
                    <div class="date-title">📅 ${currentDateFilter} · ${matchesToShow.length} 场比赛</div>
                </div>
                <div class="date-content">
                    ${matchesToShow.map(match => renderMatchCard(match, true)).join('')}
                </div>
            </div>
        `;
        // 移除 groups-grid 的样式限制
        container.style.display = 'block';
        return;
    }

    // 恢复默认布局
    container.style.display = '';

    // 默认按小组展示
    const groups = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];
    container.innerHTML = groups.map(group => {
        const groupMatches = matchesToShow.filter(m => m.group === group);
        const teams = [...new Set([...groupMatches.map(m => m.home), ...groupMatches.map(m => m.away)])];
        return `
            <div class="group-card" data-group="${group}">
                <div class="group-header">
                    <div class="group-name">${group} 组</div>
                    <div class="group-teams">${teams.map(t => `<span class="team-tag">${teamsDB[t].flag} ${t}</span>`).join('')}</div>
                </div>
                <div class="matches-list">${groupMatches.map(match => renderMatchCard(match)).join('')}</div>
            </div>
        `;
    }).join('');
}

function renderMatchCard(match, isDateView = false) {
    const prediction = generatePrediction(match.home, match.away);
    const matchId = `${match.home}-${match.away}`;
    const isFav = favorites.includes(matchId);
    const result = getMatchResult(matchId);
    const hasResult = result && result.status === 'finished';

    // 日期视图使用宽卡片样式（2列布局）
    if (isDateView) {
        const topHalfFull = prediction.halfFullTime[0];
        const topGoals = prediction.totalGoals[0];

        // 如果有真实比分，显示真实比分
        let predictionMatch = null;
        if (hasResult) {
            predictionMatch = checkPredictionMatch(match.home, match.away, result.homeScore, result.awayScore);
        }

        const scoreDisplay = hasResult ? `
            <div style="position: relative; display: flex; justify-content: center; align-items: center; gap: 20px; margin: 20px 0; padding: 20px; background: linear-gradient(135deg, ${predictionMatch?.hit ? '#1b5e20, #0d3d0d' : '#1b5e20, #0d1f0d'}); border-radius: 12px; border: 2px solid ${predictionMatch?.hit ? 'var(--secondary)' : 'var(--primary)'}; ${predictionMatch?.hit ? 'box-shadow: 0 0 20px rgba(255, 214, 0, 0.3);' : ''}">
                ${predictionMatch?.hit ? `<div style="position: absolute; top: -10px; left: 50%; transform: translateX(-50%); background: linear-gradient(135deg, var(--secondary), #ffab00); color: #0a0a0a; padding: 4px 16px; border-radius: 20px; font-size: 0.85rem; font-weight: 700; box-shadow: 0 4px 10px rgba(255, 214, 0, 0.4);">
                    ${predictionMatch.label} · ${predictionMatch.desc}
                </div>` : ''}
                <div style="text-align: center;">
                    <div style="font-size: 2.5rem; font-weight: 700; color: var(--primary-light);">${result.homeScore}</div>
                    <div style="font-size: 0.9rem; color: var(--text-light);">${match.home}</div>
                </div>
                <div style="font-size: 1.2rem; color: var(--secondary); font-weight: 700;">:</div>
                <div style="text-align: center;">
                    <div style="font-size: 2.5rem; font-weight: 700; color: var(--primary-light);">${result.awayScore}</div>
                    <div style="font-size: 0.9rem; color: var(--text-light);">${match.away}</div>
                </div>
                <div style="position: absolute; top: 10px; right: 10px; background: var(--primary); color: #0a0a0a; padding: 4px 12px; border-radius: 12px; font-size: 0.75rem; font-weight: 700;">已结束</div>
            </div>
        ` : `
            <div class="match-wide-prob prob-bar">
                <div class="prob-segment prob-home" style="width: ${prediction.homeWin}%">主胜 ${prediction.homeWin}%</div>
                <div class="prob-segment prob-draw" style="width: ${prediction.draw}%">平局 ${prediction.draw}%</div>
                <div class="prob-segment prob-away" style="width: ${prediction.awayWin}%">客胜 ${prediction.awayWin}%</div>
            </div>

            <div class="match-wide-scores">
                ${prediction.scores.map((s, i) => `
                    <div class="match-wide-score ${i === 0 ? 'top' : ''}">
                        <span class="match-wide-score-value">${s.score}</span>
                        <span class="match-wide-score-prob">${s.prob}%</span>
                    </div>
                `).join('')}
            </div>

            <div style="display: flex; gap: 12px; margin-top: 12px;">
                <div style="flex: 1; background: #0a0a0a; border-radius: 10px; padding: 12px; text-align: center; border: 1px solid var(--border);">
                    <div style="font-size: 0.75rem; color: var(--text-light); margin-bottom: 4px;">半全场 · 最可能</div>
                    <div style="font-size: 1.1rem; font-weight: 700; color: var(--primary-light);">${topHalfFull.name}</div>
                    <div style="font-size: 0.8rem; color: var(--text-light);">${topHalfFull.prob}%</div>
                </div>
                <div style="flex: 1; background: #0a0a0a; border-radius: 10px; padding: 12px; text-align: center; border: 1px solid var(--border);">
                    <div style="font-size: 0.75rem; color: var(--text-light); margin-bottom: 4px;">总进球 · 最可能</div>
                    <div style="font-size: 1.1rem; font-weight: 700; color: var(--secondary);">${topGoals.range}</div>
                    <div style="font-size: 0.8rem; color: var(--text-light);">${topGoals.prob}%</div>
                </div>
            </div>
        `;

        return `
            <div class="match-wide-card ${hasResult ? 'finished' : ''}" data-match="${matchId}" data-home="${match.home}" data-away="${match.away}">
                <div class="match-wide-teams">
                    <div class="match-wide-team">
                        <div class="team-flag">${teamsDB[match.home].flag}</div>
                        <div class="team-name">${match.home}</div>
                    </div>
                    <div class="match-wide-vs">${hasResult ? 'VS' : 'VS'}</div>
                    <div class="match-wide-team away">
                        <div class="team-flag">${teamsDB[match.away].flag}</div>
                        <div class="team-name">${match.away}</div>
                    </div>
                </div>

                ${scoreDisplay}

                <div class="match-wide-footer">
                    <span class="match-wide-time">${match.beijingDate} ${match.beijingTime} (北京时间)</span>
                    <span class="match-wide-group">${match.group}组 ${hasResult ? '✓' : ''}</span>
                </div>
            </div>
        `;
    }

    // 默认小组视图使用紧凑卡片
    const topHalfFull = prediction.halfFullTime[0];
    const topGoals = prediction.totalGoals[0];

    // 如果有真实比分，显示比分而不是预测
    if (hasResult) {
        const predictionMatch = checkPredictionMatch(match.home, match.away, result.homeScore, result.awayScore);

        return `
            <div class="match-card finished" data-match="${matchId}" data-home="${match.home}" data-away="${match.away}">
                <div class="match-teams">
                    <div class="match-team">
                        <div class="team-flag">${teamsDB[match.home].flag}</div>
                        <div class="team-name">${match.home}</div>
                    </div>
                    <div class="vs" style="font-size: 1.5rem; color: ${predictionMatch?.hit ? 'var(--secondary)' : 'var(--primary-light)'}; font-weight: 700;">${result.homeScore} - ${result.awayScore}</div>
                    <div class="match-team away">
                        <div class="team-flag">${teamsDB[match.away].flag}</div>
                        <div class="team-name">${match.away}</div>
                    </div>
                </div>
                ${predictionMatch?.hit ? `
                <div style="text-align: center; padding: 8px; background: linear-gradient(135deg, #2d1f0d, #1a1a0d); border-radius: 8px; margin: 10px 0; border: 1px solid var(--secondary); box-shadow: 0 0 10px rgba(255, 214, 0, 0.2);">
                    <span style="color: var(--secondary); font-weight: 700;">${predictionMatch.label} · ${predictionMatch.desc}</span>
                </div>` : `
                <div style="text-align: center; padding: 8px; background: linear-gradient(135deg, #1b5e20, #0d1f0d); border-radius: 8px; margin: 10px 0; border: 1px solid var(--primary);">
                    <span style="color: var(--primary-light); font-weight: 700;">✓ 比赛已结束</span>
                </div>`}
                <div class="match-meta">
                    <span>${match.beijingDate} ${match.beijingTime}</span>
                    <span>
                        <span class="confidence ${predictionMatch?.hit ? 'high' : 'medium'}">${predictionMatch?.hit ? predictionMatch.label : '已完赛'}</span>
                        <button class="fav-btn ${isFav ? 'active' : ''}" data-id="${matchId}">${isFav ? '★' : '☆'}</button>
                    </span>
                </div>
            </div>
        `;
    }

    return `
        <div class="match-card" data-match="${matchId}" data-home="${match.home}" data-away="${match.away}">
            <div class="match-teams">
                <div class="match-team">
                    <div class="team-flag">${teamsDB[match.home].flag}</div>
                    <div class="team-name">${match.home}</div>
                </div>
                <div class="vs">VS</div>
                <div class="match-team away">
                    <div class="team-flag">${teamsDB[match.away].flag}</div>
                    <div class="team-name">${match.away}</div>
                </div>
            </div>
            <div class="prob-bar">
                <div class="prob-segment prob-home" style="width: ${prediction.homeWin}%">主 ${prediction.homeWin}%</div>
                <div class="prob-segment prob-draw" style="width: ${prediction.draw}%">平 ${prediction.draw}%</div>
                <div class="prob-segment prob-away" style="width: ${prediction.awayWin}%">客 ${prediction.awayWin}%</div>
            </div>
            <div class="score-predictions">
                ${prediction.scores.map((s, i) => `
                    <div class="score-pred ${i === 0 ? 'top' : ''}">
                        <span class="score-value">${s.score}</span>
                        <span class="score-prob">${s.prob}%</span>
                    </div>
                `).join('')}
            </div>
            <div class="extra-predictions" style="display: flex; gap: 8px; margin-top: 10px; padding: 8px; background: #0a0a0a; border-radius: 8px; font-size: 0.75rem;">
                <div style="flex: 1; text-align: center; border-right: 1px solid var(--border);">
                    <div style="color: var(--text-light); margin-bottom: 2px;">半全场</div>
                    <div style="color: var(--primary-light); font-weight: 600;">${topHalfFull.name} ${topHalfFull.prob}%</div>
                </div>
                <div style="flex: 1; text-align: center;">
                    <div style="color: var(--text-light); margin-bottom: 2px;">总进球</div>
                    <div style="color: var(--secondary); font-weight: 600;">${topGoals.range} ${topGoals.prob}%</div>
                </div>
            </div>
            <div class="match-meta">
                <span>${match.beijingDate} ${match.beijingTime} (北京时间)</span>
                <span>
                    <span class="confidence ${prediction.confidence === '高' ? 'high' : prediction.confidence === '中' ? 'medium' : 'low'}">信心${prediction.confidence}</span>
                    <button class="fav-btn ${isFav ? 'active' : ''}" data-id="${matchId}">${isFav ? '★' : '☆'}</button>
                </span>
            </div>
        </div>
    `;
}

function renderBracket() {
    const container = document.getElementById('bracketContainer');
    const bracketData = {
        round16: [
            { home: '墨西哥', away: '巴西', homeProb: 35, awayProb: 65 },
            { home: '巴西', away: '韩国', homeProb: 72, awayProb: 28 },
            { home: '瑞士', away: '美国', homeProb: 55, awayProb: 45 },
            { home: '美国', away: '瑞士', homeProb: 45, awayProb: 55 },
            { home: '德国', away: '比利时', homeProb: 58, awayProb: 42 },
            { home: '比利时', away: '德国', homeProb: 42, awayProb: 58 },
            { home: '荷兰', away: '乌拉圭', homeProb: 52, awayProb: 48 },
            { home: '西班牙', away: '日本', homeProb: 62, awayProb: 38 }
        ],
        quarter: [
            { home: '巴西', away: '德国', homeProb: 48, awayProb: 52 },
            { home: '瑞士', away: '西班牙', homeProb: 38, awayProb: 62 },
            { home: '阿根廷', away: '荷兰', homeProb: 58, awayProb: 42 },
            { home: '法国', away: '英格兰', homeProb: 45, awayProb: 55 }
        ],
        semi: [
            { home: '德国', away: '西班牙', homeProb: 45, awayProb: 55 },
            { home: '阿根廷', away: '英格兰', homeProb: 52, awayProb: 48 }
        ],
        final: [
            { home: '西班牙', away: '阿根廷', homeProb: 48, awayProb: 52 }
        ]
    };
    container.innerHTML = `
        <div class="bracket-round"><div class="round-title">16强</div>${bracketData.round16.map(m => renderBracketMatch(m)).join('')}</div>
        <div class="bracket-round"><div class="round-title">8强</div>${bracketData.quarter.map(m => renderBracketMatch(m)).join('')}</div>
        <div class="bracket-round"><div class="round-title">半决赛</div>${bracketData.semi.map(m => renderBracketMatch(m)).join('')}</div>
        <div class="bracket-round"><div class="round-title">决赛 🏆</div>${bracketData.final.map(m => renderBracketMatch(m, true)).join('')}</div>
    `;
}

function renderBracketMatch(match, isFinal = false) {
    const homeTeam = teamsDB[match.home] || { flag: '?' };
    const awayTeam = teamsDB[match.away] || { flag: '?' };
    return `
        <div class="bracket-match ${isFinal ? 'final' : ''}">
            <div class="bracket-team"><span class="bracket-team-name">${homeTeam.flag} ${match.home}</span><span class="bracket-team-prob">${match.homeProb}%</span></div>
            <div class="bracket-team"><span class="bracket-team-name">${awayTeam.flag} ${match.away}</span><span class="bracket-team-prob">${match.awayProb}%</span></div>
        </div>
    `;
}

function renderTeams() {
    const container = document.getElementById('teamsContainer');
    const tiers = { '夺冠热门': [], '一线强队': [], '二线/东道主': [], '中游/新军': [] };
    Object.entries(teamsDB).forEach(([name, data]) => { if (tiers[data.tier]) tiers[data.tier].push({ name, ...data }); });
    container.innerHTML = Object.entries(tiers).map(([tier, teams]) => `
        <div class="team-category">
            <h3 class="category-title">${tier === '夺冠热门' ? '🔥' : tier === '一线强队' ? '⭐' : tier === '二线/东道主' ? '🏟️' : '🌱'} ${tier}</h3>
            <div class="teams-grid">${teams.map(t => `
                <div class="team-detail-card" data-team="${t.name}">
                    <div class="team-detail-header">
                        <div class="team-flag">${t.flag}</div>
                        <div class="team-detail-info"><h4>${t.name} <small>(${t.group}组)</small></h4><span>战力 ${t.strength}/100</span></div>
                    </div>
                    <div class="team-players"><strong>核心:</strong> ${t.keyPlayers}<br><small style="color: #666;">${t.info.substring(0, 45)}...</small></div>
                </div>
            `).join('')}</div>
        </div>
    `).join('');
}

function showTeamDetail(teamName) {
    const team = teamsDB[teamName];
    if (!team) return;

    // 获取该队的比赛（直接使用映射表获取北京时间）
    const teamMatches = groupStageMatches.filter(m => m.home === teamName || m.away === teamName).map(m => {
        const beijing = convertToBeijingTime(m);
        return { ...m, beijingDate: beijing.date, beijingTime: beijing.time };
    });

    document.getElementById('modalTeams').innerHTML = `
        <div class="modal-team">
            <div class="team-flag" style="width: 80px; height: 80px; font-size: 2rem; margin: 0 auto 8px;">${team.flag}</div>
            <div class="modal-team-name">${teamName}</div>
        </div>
    `;

    document.getElementById('modalBody').innerHTML = `
        <div class="detail-section">
            <h3>📊 球队档案</h3>
            <div class="factor-item">
                <strong>档位：</strong>${team.tier}<br>
                <strong>小组：</strong>${team.group}组<br>
                <strong>战力值：</strong>${team.strength}/100
            </div>
        </div>
        <div class="detail-section">
            <h3>👥 核心球员</h3>
            <div class="factor-item">${team.keyPlayers}</div>
        </div>
        <div class="detail-section">
            <h3>📝 球队简介</h3>
            <div class="analysis-text">${team.info}</div>
        </div>
        <div class="detail-section">
            <h3>📅 小组赛赛程（北京时间）</h3>
            <div class="factors-list">
                ${teamMatches.map(m => {
                    const isHome = m.home === teamName;
                    const opponent = isHome ? m.away : m.home;
                    return `<div class="factor-item">${m.beijingDate} ${m.beijingTime} vs ${teamsDB[opponent].flag} ${opponent} (${isHome ? '主' : '客'})</div>`;
                }).join('')}
            </div>
        </div>
    `;

    document.getElementById('modalOverlay').classList.add('active');
}

function renderFavorites() {
    const container = document.getElementById('favoritesContainer');
    if (favorites.length === 0) {
        container.innerHTML = `
            <div class="favorites-empty">
                <div class="favorites-empty-icon">⭐</div>
                <p>还没有收藏任何比赛</p>
                <p style="font-size: 0.85rem; margin-top: 8px;">在小组赛页面点击 ☆ 星标添加收藏</p>
            </div>
        `;
        return;
    }
    const matchesWithBeijingTime = getMatchesWithBeijingTime();
    const favMatches = favorites.map(id => {
        const [home, away] = id.split('-');
        return matchesWithBeijingTime.find(m => m.home === home && m.away === away);
    }).filter(Boolean);
    container.innerHTML = `<div class="groups-grid">${favMatches.map(match => `
        <div class="group-card"><div class="group-header"><div class="group-name">${match.group}组 · ${match.beijingDate}</div></div><div class="matches-list">${renderMatchCard(match)}</div></div>
    `).join('')}</div>`;
}

function showMatchDetail(home, away) {
    const prediction = generatePrediction(home, away);
    const homeTeam = teamsDB[home];
    const awayTeam = teamsDB[away];
    const matchId = `${home}-${away}`;
    const result = getMatchResult(matchId);
    const hasResult = result && result.status === 'finished';

    document.getElementById('modalTeams').innerHTML = `
        <div class="modal-team"><div class="team-flag">${homeTeam.flag}</div><div class="modal-team-name">${home}</div></div>
        <div class="modal-vs">${hasResult ? `${result.homeScore} : ${result.awayScore}` : 'VS'}</div>
        <div class="modal-team"><div class="team-flag">${awayTeam.flag}</div><div class="modal-team-name">${away}</div></div>
    `;

    // 比分更新区域
    const scoreUpdateSection = `
        <div class="detail-section">
            <h3>📝 更新比赛结果</h3>
            <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
                <div style="display: flex; align-items: center; gap: 8px;">
                    <label style="color: var(--text-light);">${home}:</label>
                    <input type="number" id="homeScoreInput" min="0" max="20" value="${hasResult ? result.homeScore : '0'}"
                        style="width: 60px; padding: 8px; background: #0a0a0a; border: 1px solid var(--primary); border-radius: 8px; color: var(--text); font-size: 1.1rem; text-align: center;">
                </div>
                <span style="color: var(--text-light);">-</span>
                <div style="display: flex; align-items: center; gap: 8px;">
                    <input type="number" id="awayScoreInput" min="0" max="20" value="${hasResult ? result.awayScore : '0'}"
                        style="width: 60px; padding: 8px; background: #0a0a0a; border: 1px solid var(--primary); border-radius: 8px; color: var(--text); font-size: 1.1rem; text-align: center;">
                    <label style="color: var(--text-light);">:${away}</label>
                </div>
                <button id="updateScoreBtn" onclick="updateMatchScore('${matchId}')"
                    style="padding: 8px 20px; background: var(--primary); color: #0a0a0a; border: none; border-radius: 8px; font-weight: 700; cursor: pointer;">${hasResult ? '更新比分' : '保存比分'}</button>
                ${hasResult ? `<button onclick="clearMatchScore('${matchId}')"
                    style="padding: 8px 16px; background: transparent; color: var(--text-light); border: 1px solid var(--border); border-radius: 8px; cursor: pointer;"
                >清除</button>` : ''}
            </div>
            ${hasResult ? (() => {
                const match = checkPredictionMatch(home, away, result.homeScore, result.awayScore);
                return `<div style="margin-top: 12px; padding: 16px; background: linear-gradient(135deg, ${match.hit ? '#2d1f0d, #1a1a0d' : '#1b5e20, #0d1f0d'}); border-radius: 8px; border: 2px solid ${match.hit ? 'var(--secondary)' : 'var(--primary)'}; ${match.hit ? 'box-shadow: 0 0 15px rgba(255, 214, 0, 0.3);' : ''}">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <span style="color: ${match.hit ? 'var(--secondary)' : 'var(--primary-light)'}; font-weight: 700; font-size: 1.1rem;">
                            ${match.hit ? '🎯 ' + match.label : '✓ 比赛已结束'}
                        </span>
                        ${match.hit ? `<span style="background: var(--secondary); color: #0a0a0a; padding: 4px 12px; border-radius: 12px; font-size: 0.8rem; font-weight: 700;">${match.desc}</span>` : ''}
                    </div>
                    <div style="margin-top: 8px; color: var(--text-light); font-size: 0.9rem;">
                        实际比分: <strong style="color: var(--text);">${home} ${result.homeScore} - ${result.awayScore} ${away}</strong>
                        ${match.hit ? `<br><span style="color: var(--secondary);">预测命中！AI预测最可能比分: ${prediction.scores[0].score} (${prediction.scores[0].prob}%)</span>` : `<br>AI预测最可能: ${prediction.scores[0].score} (${prediction.scores[0].prob}%)`}
                    </div>
                </div>`;
            })() : ''}
        </div>
    `;
    document.getElementById('modalBody').innerHTML = `
        ${scoreUpdateSection}
        <div class="detail-section"><h3>📊 胜率预测</h3><div class="prob-bar" style="height: 36px;">
            <div class="prob-segment prob-home" style="width: ${prediction.homeWin}%">${home}胜 ${prediction.homeWin}%</div>
            <div class="prob-segment prob-draw" style="width: ${prediction.draw}%">平局 ${prediction.draw}%</div>
            <div class="prob-segment prob-away" style="width: ${prediction.awayWin}%">${away}胜 ${prediction.awayWin}%</div>
        </div></div>
        <div class="detail-section"><h3>🎯 最可能比分（Top 3）</h3><div class="score-predictions" style="justify-content: flex-start;">
            ${prediction.scores.map((s, i) => `<div class="score-pred" style="flex: 1; padding: 16px;"><span style="font-size: 0.75rem; color: #999;">${i === 0 ? '最可能' : i === 1 ? '次可能' : '第三可能'}</span><span class="score-value" style="font-size: 1.5rem;">${s.score}</span><span class="score-prob" style="font-size: 1rem;">${s.prob}%</span></div>`).join('')}
        </div></div>
        <div class="detail-section"><h3>⏱️ 半全场胜平负预测</h3>
            <div class="factors-list" style="gap: 10px;">
                ${prediction.halfFullTime.map((hf, i) => `
                    <div class="factor-item" style="display: flex; justify-content: space-between; align-items: center; ${i === 0 ? 'border-color: var(--primary); background: linear-gradient(135deg, #0d1f0d, #1a1a1a);' : ''}">
                        <div>
                            <strong style="color: var(--primary-light); font-size: 1.1rem;">${hf.name}</strong>
                            <span style="color: var(--text-light); margin-left: 8px; font-size: 0.85rem;">${hf.desc}</span>
                        </div>
                        <span style="font-weight: 700; color: ${i === 0 ? 'var(--primary-light)' : 'var(--text)'}; font-size: 1.1rem;">${hf.prob}%</span>
                    </div>
                `).join('')}
            </div>
        </div>
        <div class="detail-section"><h3>⚽ 总进球数预测</h3>
            <div class="factors-list" style="gap: 10px;">
                ${prediction.totalGoals.map((tg, i) => `
                    <div class="factor-item" style="display: flex; justify-content: space-between; align-items: center; ${i === 0 ? 'border-color: var(--secondary); background: linear-gradient(135deg, #1a1a1a, #1b1b0d);' : ''}">
                        <div>
                            <strong style="color: ${i === 0 ? 'var(--secondary)' : 'var(--text)'}; font-size: 1.1rem;">${tg.range}</strong>
                            <span style="color: var(--text-light); margin-left: 8px; font-size: 0.85rem;">${tg.label} · ${tg.desc}</span>
                        </div>
                        <span style="font-weight: 700; color: ${i === 0 ? 'var(--secondary)' : 'var(--text)'}; font-size: 1.1rem;">${tg.prob}%</span>
                    </div>
                `).join('')}
            </div>
        </div>
        <div class="detail-section"><h3>🔑 关键因素</h3><div class="factors-list">${prediction.keyFactors.map(f => `<div class="factor-item">${f}</div>`).join('')}</div></div>
        <div class="detail-section"><h3>👥 值得关注</h3><div class="players-grid">${prediction.playersToWatch.map(p => `
            <div class="player-card"><div class="player-team">${teamsDB[p.team].flag} ${p.team}</div><div class="player-name">${p.player}</div><div class="player-reason">${p.reason}</div></div>
        `).join('')}</div></div>
        <div class="detail-section"><h3>💬 综合分析</h3><div class="analysis-text">${prediction.analysis}</div></div>
        <div class="detail-section"><h3>📈 信心指数</h3><span class="confidence ${prediction.confidence === '高' ? 'high' : prediction.confidence === '中' ? 'medium' : 'low'}" style="padding: 8px 20px; font-size: 1rem;">${prediction.confidence}</span><span style="color: #999; margin-left: 10px;">${prediction.confidence === '高' ? '实力差距明显，预测把握较大' : prediction.confidence === '中' ? '有一定变数，但趋势可判' : '实力接近，难以预料'}</span></div>
    `;
    document.getElementById('modalOverlay').classList.add('active');
}

function startCountdown() {
    const target = new Date('2026-06-11T20:00:00');
    function update() {
        const now = new Date();
        const diff = target - now;
        if (diff <= 0) { document.getElementById('countdown').textContent = '比赛进行中！'; return; }
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        document.getElementById('countdown').textContent = `${days}天 ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
    update();
    setInterval(update, 1000);
}

function setupEventListeners() {
    // 导航切换
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById(btn.dataset.section).classList.add('active');
        });
    });

    // 日期筛选按钮
    document.querySelectorAll('.date-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.date-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentDateFilter = btn.dataset.date;
            renderGroups();
        });
    });

    // 比赛卡片点击
    document.addEventListener('click', e => {
        const card = e.target.closest('.match-card') || e.target.closest('.match-wide-card');
        if (card && !e.target.closest('.fav-btn')) showMatchDetail(card.dataset.home, card.dataset.away);

        // 球队卡片点击
        const teamCard = e.target.closest('.team-detail-card');
        if (teamCard) {
            const teamName = teamCard.dataset.team;
            if (teamName) showTeamDetail(teamName);
        }

        const favBtn = e.target.closest('.fav-btn');
        if (favBtn) {
            e.stopPropagation();
            const id = favBtn.dataset.id;
            const idx = favorites.indexOf(id);
            if (idx > -1) { favorites.splice(idx, 1); favBtn.classList.remove('active'); favBtn.textContent = '☆'; }
            else { favorites.push(id); favBtn.classList.add('active'); favBtn.textContent = '★'; }
            localStorage.setItem('worldcup_favorites', JSON.stringify(favorites));
            renderFavorites();
        }
    });

    // 搜索
    document.getElementById('searchInput').addEventListener('input', e => {
        const term = e.target.value.toLowerCase();
        document.querySelectorAll('.group-card').forEach(card => {
            card.style.display = card.textContent.toLowerCase().includes(term) ? 'block' : 'none';
        });
    });

    // 关闭弹窗
    document.getElementById('modalClose').addEventListener('click', () => document.getElementById('modalOverlay').classList.remove('active'));
    document.getElementById('modalOverlay').addEventListener('click', e => { if (e.target === document.getElementById('modalOverlay')) document.getElementById('modalOverlay').classList.remove('active'); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') document.getElementById('modalOverlay').classList.remove('active'); });
}

// 更新比赛比分
function updateMatchScore(matchId) {
    const homeScore = parseInt(document.getElementById('homeScoreInput').value) || 0;
    const awayScore = parseInt(document.getElementById('awayScoreInput').value) || 0;

    saveMatchResult(matchId, homeScore, awayScore, 'finished');

    // 重新打开弹窗显示更新后的内容
    const [home, away] = matchId.split('-');
    showMatchDetail(home, away);

    // 刷新页面显示
    renderGroups();
}

// 清除单场比赛结果
function clearMatchScore(matchId) {
    if (confirm('确定要清除这场比赛的结果吗？')) {
        delete matchResults[matchId];
        localStorage.setItem('worldcup_results', JSON.stringify(matchResults));
        renderGroups();

        // 重新打开弹窗
        const [home, away] = matchId.split('-');
        showMatchDetail(home, away);
    }
}

// 测试数据源连接（按F12打开控制台查看日志）
async function testDataSource() {
    const url = 'https://raw.githubusercontent.com/juanmao233333-cloud/worldcup2026-scores/refs/heads/main/scores.json';

    try {
        console.log('[测试] 正在连接:', url);
        const response = await fetch(url + '?t=' + Date.now());

        if (!response.ok) {
            console.error('[测试] HTTP错误:', response.status);
            return { success: false, error: 'HTTP ' + response.status };
        }

        const text = await response.text();
        console.log('[测试] 响应内容:', text.substring(0, 500));

        const data = JSON.parse(text);
        console.log('[测试] 解析成功:', data);
        return { success: true, data };
    } catch (error) {
        console.error('[测试] 错误:', error);
        return { success: false, error: error.message };
    }
}

// 覆盖原有的手动同步函数
const originalManualSync = manualSync;
manualSync = async function() {
    const btn = document.getElementById('syncBtn');
    if (btn) {
        btn.textContent = '⏳ 测试中...';
        btn.disabled = true;
    }

    // 先测试连接
    const testResult = await testDataSource();
    if (!testResult.success) {
        if (btn) {
            btn.textContent = '✗ 连接失败';
            btn.disabled = false;
            setTimeout(() => { btn.textContent = '🔄 同步比分'; }, 2000);
        }
        alert('连接失败: ' + testResult.error);
        return;
    }

    // 连接成功，继续同步
    if (btn) btn.textContent = '⏳ 同步中...';

    const result = await syncScoresFromCloud();

    if (btn) {
        btn.textContent = result.success ? '✓ 同步成功' : '✗ 同步失败';
        btn.disabled = false;
        setTimeout(() => { btn.textContent = '🔄 同步比分'; }, 2000);
    }

    if (result.success) {
        alert('同步成功！更新了 ' + result.count + ' 场比赛');
    } else {
        alert('同步失败: ' + result.error);
    }
};

document.addEventListener('DOMContentLoaded', init);
