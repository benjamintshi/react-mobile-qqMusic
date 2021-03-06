import React from 'react';
import { Grid } from 'antd-mobile';
import './style.scss';
import auditionImg from '@/assets/icon-user-audition.png';
import dredgeImg from '@/assets/icon-user-dredge.png';
import rankImg from '@/assets/icon-user-rank.png';
import SongMenu from '@/components/SongMenu';
class MyCenter extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const girdList = [
            {
                text: '本地歌曲',
                imgSrc: require('@/assets/icon-grid-music.png')
            },
            {
                text: '下载歌曲',
                imgSrc: require('@/assets/icon-grid-download.png')
            },
            {
                text: '最近播放',
                imgSrc: require('@/assets/icon-grid-recent.png')
            },
            {
                text: '我喜欢',
                imgSrc: require('@/assets/icon-grid-favorite.png')
            },
            {
                text: '下载MV',
                imgSrc: require('@/assets/icon-grid-mv.png')
            },
            {
                text: '已购音乐',
                imgSrc: require('@/assets/icon-grid-buy.png')
            }
        ]
        return (
            <div className="qqMusic-home-body">
                <div className="qqMusic-myCenter-top">
                    <div className="qqMusic-myCenter-user">
                        <div className="qqMusic-myCenter-user-module">
                            <div className="qqMusic-myCenter-user-audition">
                                <img className="icon" src={auditionImg} />
                                <span className="text">0分钟</span>
                            </div>
                            <img className="qqMusic-myCenter-user-photo" src="https://wx.qlogo.cn/mmopen/LHU7CmulIEWaZgu4PRWXOScvVCC5npYoPvBFVLMXldibtQ1BRVMJy4RaHXliabaqJSazgI8QTuF9g2X7l9iafOvfX27vcHl2ksA/0" />
                            <div className="qqMusic-myCenter-user-dredge">
                                <img className="icon" src={dredgeImg} />
                                <span className="text">开通</span>
                            </div>
                        </div>
                        <div className="qqMusic-myCenter-user-module">
                            <span className="userName">椰子油</span>
                        </div>
                        <div className="qqMusic-myCenter-user-module">
                            <img className="qqMusic-myCenter-user-rank" src={rankImg} />
                        </div>
                    </div>
                    <Grid
                        className="qqMusic-myCenter-grid"
                        data={girdList}
                        columnNum={3}
                        hasLine={false}
                        renderItem={
                            item => (
                                <div className="qqMusic-myCenter-grid-item">
                                    <img className="image" src={item.imgSrc} />
                                    <p className="text">{item.text}</p>
                                </div>
                            )
                        }
                    />
                    <div className="qqMusic-myCenter-middle">
                        <div className="qqMusic-myCenter-station">
                            <div className="qqMusic-myCenter-station-left">
                                <img className="station-image" src="/static/images/broadcasting-station-specific.jpeg" />
                            </div>
                            <div className="qqMusic-myCenter-station-right">
                                <h4 className="station-title">个性电台</h4>
                                <p className="station-text">偶遇身边好音乐</p>
                            </div>
                        </div>
                        <div className="qqMusic-myCenter-station">
                            <div className="qqMusic-myCenter-station-left">
                                <img className="station-image" src="/static/images/broadcasting-station-run.jpeg" />
                            </div>
                            <div className="qqMusic-myCenter-station-right border-top">
                                <h4 className="station-title">跑步电台</h4>
                                <p className="station-text">QQ音乐 x Nike，让运动乐在其中</p>
                            </div>
                        </div>
                    </div>
                    <SongMenu />
                </div>
            </div>
        )
    }
}
export default MyCenter;