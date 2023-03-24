import Tab from "../tab/Tab"
import styles from './tabs.module.scss'
import { useState } from 'react';
import { v4 } from "uuid";
import TabStyled from "../tab-styled/TabStyled";

const tabs = ['Tab 1', 'Tab 2', 'Tab 3'];
const tabsInfo = ['Info 1', 'Info 2', 'Info 3']

const Tabs = () => {
    const [value, setValue] = useState(0)

    return <div><div className={styles.tabs}>
        {tabs.map((tab, index) => (
            <Tab
            key={v4()}
            index={index}
            isActive={index === value}
            setValue={setValue}
            text={tab}
            />
            )
        )}
        <div className={styles.tabs__info}>{tabsInfo[value]}</div>
    </div>
            <div className={styles.tabs}>
                {tabs.map((tab, index) => (
                <TabStyled 
                key={v4()}
                index={index}
                isActive={index === value}
                setValue={setValue}
                text= {tab}
                />
                )
            )}
            <div className={styles.tabs__info}>{tabsInfo[value]}</div>
            </div>
    </div>
    
}

export default Tabs