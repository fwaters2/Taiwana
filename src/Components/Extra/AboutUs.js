import React from "react";
import { Typography } from "@material-ui/core";

export default function AboutUs() {
  return (
    <div>
      <Typography variant="h4">Purpose:</Typography>
      <Typography paragraph>
        The goal of this tournament is introduce the sport to as many people as
        possible while playing with as many different people as possible. With
        that in mind we're introducing a new kind of tournament where you will
        be teaming up with other squads in each game of 5v5 ultimate.
      </Typography>
      <Typography paragraph>
        本次的活動目標一為推廣競技飛盤讓更多人認識，二為能和各個不同選手一起組隊。所以我們將介紹一個新型式的比賽，每隊每場都會與不同的小隊組隊，進行5:5的比賽。
      </Typography>
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FKaohsiungUltimateLeague%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=239675496669332"
        width="340"
        height="500"
        //style="border:none;overflow:hidden"
        scrolling="no"
        frameBorder="0"
        allowTransparency="true"
        allow="encrypted-media"
      />
    </div>
  );
}
