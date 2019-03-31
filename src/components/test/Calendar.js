import React, { Component } from "react";
import moment from "moment";
import Timeline from "react-calendar-timeline";
// import generateData from "../../../helpers/generate-data";
//
// const { groups, items } = generateData();

let keys = {
  groupIdKey: "id",
  groupTitleKey: "title",
  groupRightTitleKey: "rightTitle",
  itemIdKey: "id",
  itemTitleKey: "title",
  itemDivTitleKey: "title",
  itemGroupKey: "group",
  itemTimeStartKey: "start",
  itemTimeEndKey: "end",
  groupLabelKey: "title"
};

class Calendar extends Component {
  constructor(props) {
    super(props);

    const {groups, items} = this.props;
    console.log(this.props);
    const defaultTimeStart = moment()
      .startOf("day")
      .toDate();
    const defaultTimeEnd = moment()
      .startOf("day")
      .add(1, "day")
      .toDate();

    this.state = {
      groups,
      items,
      defaultTimeStart,
      defaultTimeEnd
    };
  }

  //scroll back/forward
  animateScroll = invert => {
    const width = (invert ? -1 : 1) * parseFloat(this.scrollRef.style.width); // cos curve in both directions
    const duration = 2000;

    const startTime = performance.now();
    let lastWidth = 0;
    const animate = () => {
      let normalizedTime = (performance.now() - startTime) / duration;
      if (normalizedTime > 1) {
        // not overanimate
        normalizedTime = 1;
      }

      // http://www.wolframalpha.com/input/?i=plot+0.5+(1%2Bcos(%CF%80+(x-1)))*1000+from+0+to+1 --> 1000 is the simulated width
      const calculatedWidth = Math.floor(
          width * 0.5 * (1 + Math.cos(Math.PI * (normalizedTime - 1)))
      );
      this.scrollRef.scrollLeft += calculatedWidth - lastWidth;
      lastWidth = calculatedWidth;

      if (normalizedTime < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  };

  onPrevClick = () => {
    this.animateScroll(true);
  };

  onNextClick = () => {
    this.animateScroll(false);
  };

  //set different colors for items
  itemRenderer = ({
                    item,
                    timelineContext,
                    itemContext,
                    getItemProps,
                    getResizeProps
                  }) => {
    const { left: leftResizeProps, right: rightResizeProps } = getResizeProps();
    const backgroundColor = itemContext.selected
        ? itemContext.dragging
            ? "red"
            : item.selectedBgColor
        : item.bgColor;
    const borderColor = itemContext.resizing ? "red" : item.color;
    return (
        <div
            {...getItemProps({
              style: {
                backgroundColor,
                color: item.color,
                borderColor,
                borderStyle: "solid",
                borderWidth: 1,
                borderRadius: 4,
                borderLeftWidth: itemContext.selected ? 3 : 1,
                borderRightWidth: itemContext.selected ? 3 : 1
              },
              onMouseDown: () => {
                console.log("on item click", item);
                this.props.setId(item.id);
              }
            })}
        >
          {itemContext.useResizeHandle ? <div {...leftResizeProps} /> : null}

          <div
              style={{
                height: itemContext.dimensions.height,
                overflow: "hidden",
                paddingLeft: 3,
                textOverflow: "ellipsis",
                whiteSpace: "nowrap"
              }}
          >
            {itemContext.title}
          </div>

          {itemContext.useResizeHandle ? <div {...rightResizeProps} /> : null}
        </div>
    );
  };

  //items can be moved
  handleItemMove = (itemId, dragTime, newGroupOrder) => {
    const { items, groups } = this.state;

    const group = groups[newGroupOrder];

    this.setState({
      items: items.map(item =>
        item.id === itemId
          ? Object.assign({}, item, {
              start: dragTime,
              end: dragTime + (item.end - item.start),
              group: group.id
            })
          : item
      )
    });

    console.log("Moved", itemId, dragTime, newGroupOrder);
  };

  //items can be resized
  handleItemResize = (itemId, time, edge) => {
    const { items } = this.state;

    this.setState({
      items: items.map(item =>
        item.id === itemId
          ? Object.assign({}, item, {
              start: edge === "left" ? time : item.start,
              end: edge === "left" ? item.end : time
            })
          : item
      )
    });

    console.log("Resized", itemId, time, edge);
  };


  render() {
    const { groups, items, defaultTimeStart, defaultTimeEnd } = this.state;
    return (
        <div>
            <Timeline
              groups={groups}
              items={items}
              keys={keys}
              fullUpdate
              SidebarWidth={100}
              sidebarContent={<div>Company name</div>}
              rightSidebarWidth={150}
              rightSidebarContent={<div>Teacher name</div>}
              itemsSorted
              itemTouchSendsClick={true}
              stackItems
              itemHeightRatio={1.0}
              showCursorLine
              canChangeGroup={true}
              headerLabelGroupHeight={35}
              canMove={true}
              canResize={"both"}
              defaultTimeStart={defaultTimeStart}
              defaultTimeEnd={defaultTimeEnd}
              itemRenderer={this.itemRenderer}
              onItemMove={this.handleItemMove}
              onItemResize={this.handleItemResize}
              scrollRef={el => (this.scrollRef = el)}
        />
          <button style={{float: "left"}} onClick={this.onPrevClick}>{"< Prev"}</button>
          <button style={{float: "right"}} onClick={this.onNextClick}>{"Next >"}</button>
        </div>
    );
  }
}

export default Calendar;
