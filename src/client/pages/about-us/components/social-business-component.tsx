import styles from "../about-us.module.scss";

export default function Component() {
  return (
    <section className={styles["social-business-section"]}>
      <div className={styles["social-business-parent"]}>
        <div className={styles["main-title"]}>
          Ecosia is a social business founded in 2009 after a trip around the
          world
        </div>
        <div className={styles["social-business-child"]}>
          {getTimePeriods().map((period, index) => (
            <div key={`period_${index}`}>
              <div className={styles["title"]}>{period.time}</div>
              <div className={styles["center"]}>{period.title}</div>
              <div className={styles["line"]} />
              <div className={styles["center"]}>{period.content}</div>
            </div>
          ))}
        </div>
        <div/>
      </div>
    </section>
  );
}

function getTimePeriods() {
  return [
    {
      time: "December 2009",
      title: "Ecosia is born",
      content:
        "Christian founded Ecosia.org after a trip around the world helped him understand the problems of deforestation.",
    },
    {
      time: "2009 - 2011",
      title: "People's choice",
      content:
        "Ecosia won several awards for its clever concept and speedy growth in Europe and beyond.",
    },
    {
      time: "April 2014",
      title: "First German B Corp",
      content:
        "Ecosia was the first German company to become a B Corporation thanks to its social business model.",
    },
    {
      time: "April 2018",
      title: "25 million trees",
      content:
        "A planting milestone! That same year, Ecosia also builds its own solar energy plant to power every search.",
    },
  ];
}
