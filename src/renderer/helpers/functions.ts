import { AgentStates, TicketStates } from "@fluyappgo/commons";
import dayjs from 'dayjs'

export function hola() {
  return "adios";
}

export const DefaultOptionLottie = (animationData: any) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return defaultOptions;
};

export const getPriorityByTicketStatus = (state: TicketStates) => {
  switch (state) {
    case TicketStates.CREATED: {
      return 1;
    }

    case TicketStates.WAITING: {
      return 2;
    }

    case TicketStates.CALLING: {
      return 3;
    }

    case TicketStates.ATTENDING: {
      return 2;
    }

    case TicketStates.FINISHED: {
      return 1;
    }

    case TicketStates.CANCELLED: {
      return 1;
    }

    default:
      return 0;
  }
};

export const FormatMinutesSeconds = (total: number, type: string) => {
  if (type == "M") {
    let days = 0;
    let hours = 0;
    let minutes = Math.floor(total / 60);
    let seconds = Math.floor(total % 60);

    if (minutes >= 60) {
      hours = Math.floor(minutes / 60);
      minutes = Math.floor(minutes % 60);

      if (hours >= 24) {
        days = Math.floor(hours / 24);
        hours = Math.floor(hours % 24);

        return `${days}d ${hours}h ${minutes}m ${seconds}s`;
      }

      return `${hours}h ${minutes}m ${seconds}s`;
    }

    return `${minutes}m ${seconds}s`;
  }

  if (type == "sortableString") {
    let days = 0;
    let hours = 0;
    let minutes = Math.floor(total / 60);
    let seconds = Math.floor(total % 60);
    let nHours = "";
    let nMinutes = "";
    let nSeconds = "";
    let nDays = "";

    if (minutes >= 60) {
      hours = Math.floor(minutes / 60);
      minutes = Math.floor(minutes % 60);

      if (hours >= 24) {
        days = Math.floor(hours / 24);
        hours = Math.floor(hours % 24);

        nDays = normalizeTime(days);
        nHours = normalizeTime(hours);
        nMinutes = normalizeTime(minutes);
        nSeconds = normalizeTime(seconds);

        return `${nDays}d ${nHours}h ${nMinutes}m ${nSeconds}s`;
      }

      nHours = normalizeTime(hours);
      nMinutes = normalizeTime(minutes);
      nSeconds = normalizeTime(seconds);

      return `${nHours}h ${nMinutes}m ${nSeconds}s`;
    }
    nMinutes = normalizeTime(minutes);
    nSeconds = normalizeTime(seconds);

    return `${nMinutes}m ${nSeconds}s`;
  }

  return "";
};

const normalizeTime = (num: number) => {
  if (num < 10) {
    return `0${num}`;
  }

  return `${num}`;
};

export const FormatPercentage = (max: number, actual: number) => {
  // returns value from 0 to 1.
  let percentage = (100 * actual) / max / 100;
  return percentage > 1 ? 1 : percentage;
};

export const getColorByTicketStatus = (state: TicketStates) => {
  switch (state) {
    case TicketStates.CREATED: {
      return "black";
    }

    case TicketStates.WAITING: {
      return "#C0B12A";
    }

    case TicketStates.CALLING: {
      return "#F92BAD";
    }

    case TicketStates.ATTENDING: {
      return "#799E00";
    }

    case TicketStates.FINISHED: {
      return "#296600";
    }

    case TicketStates.CANCELLED: {
      return "#C6000D";
    }

    default:
      return "gray";
  }
};

export const getColorByAgentStatus = (state: AgentStates) => {
  switch (state) {
    case AgentStates.offline: {
      return "#C6000D";
    }

    case AgentStates.online: {
      return "#009205";
    }

    case AgentStates.attending: {
      return "#879100";
    }

    case AgentStates.lunching: {
      return "#B75C00";
    }

    case AgentStates.calling: {
      return "#B7006E";
    }

    case AgentStates.resting: {
      return "#9F0025";
    }

    default:
      return "gray";
  }
};

export const statusMap: { [key: string]: { color: string; image: string } } = {
  [AgentStates.online]: {
    color: "#4E28D2",
    image: "/images/adminTickets/online.svg",
  },
  [AgentStates.offline]: {
    color: "red",
    image: "/images/adminTickets/offline.svg",
  },
  [AgentStates.lunching]: {
    color: "#FFCC00",
    image: "/images/adminTickets/lunching.svg",
  },
  [AgentStates.resting]: {
    color: "#FFCC00",
    image: "/images/adminTickets/resting.svg",
  },
  [AgentStates.calling]: {
    color: "#4E28D2",
    image: "/images/adminTickets/online.svg",
  },
  [AgentStates.attending]: {
    color: "#4E28D2",
    image: "/images/adminTickets/online.svg",
  },
  [AgentStates.manual]: {
    color: "#4E28D2",
    image: "/images/adminTickets/online.svg",
  },
  [AgentStates.documenting]: {
    color: "#FFCC00",
    image: "/images/adminTickets/lunching.svg",
  },
  [AgentStates.adminTask]: {
    color: "#FFCC00",
    image: "/images/adminTickets/lunching.svg",
  },
  [AgentStates.bath]: {
    color: "#FFCC00",
    image: "/images/adminTickets/lunching.svg",
  },
  [AgentStates.training]: {
    color: "#FFCC00",
    image: "/images/adminTickets/lunching.svg",
  },
};

export const applyConversionRatio = (
  css: CSSStyleDeclaration,
  ratioWidth: number,
  ratioHeight: number
) => {
  let result: any = { ...css };

  Object.keys(css).map((key: any) => {
    const value = css[key];

    switch (key) {
      case "padding": {
        result[key] = Number(value) * ratioWidth;
      }

      case "paddingTop": {
        result[key] = Number(value) * ratioHeight;
      }

      case "paddingBottom": {
        result[key] = Number(value) * ratioHeight;
      }

      case "paddingLeft": {
        result[key] = Number(value) * ratioWidth;
      }

      case "paddingRight": {
        result[key] = Number(value) * ratioWidth;
      }

      case "margin": {
        result[key] = Number(value) * ratioWidth;
      }

      case "marginTop": {
        result[key] = Number(value) * ratioHeight;
      }

      case "marginBottom": {
        result[key] = Number(value) * ratioHeight;
      }

      case "marginLeft": {
        result[key] = Number(value) * ratioWidth;
      }

      case "marginRight": {
        result[key] = Number(value) * ratioWidth;
      }

      case "fontSize": {
        result[key] = Number(value) * ratioWidth;
      }

      case "width": {
        result[key] = Number(value) * ratioWidth;
      }

      case "height": {
        result[key] = Number(value) * ratioHeight;
      }
    }
  });

  return result;
};

export function haversineDistance(
  coords1: any,
  coords2: any,
  isMiles: boolean
) {
  function toRad(x: any) {
    return (x * Math.PI) / 180;
  }

  var lon1 = coords1.longitude;
  var lat1 = coords1.latitude;

  var lon2 = coords2.longitude;
  var lat2 = coords2.latitude;

  var R = 6371; // km

  var x1 = lat2 - lat1;
  var dLat = toRad(x1);
  var x2 = lon2 - lon1;
  var dLon = toRad(x2);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;

  if (isMiles) d /= 1.60934;

  return Number(d.toFixed(2));
}

export const format_mm_dd_yyyy = (date: string) => {
  return dayjs(date).format("MM/DD/YYYY");
};

export const format_mm_dd = (date: string) => {
  return dayjs(date).format("MM/DD");
};

export const format_mm_yyyy = (date: string) => {
  return dayjs(date).format("MM/YYYY");
};

export const format_all = (date: string) => {
  return dayjs(date).format("MMMM DD, hh:mm A");
};

export const format_date_string = (date: string) => {
  return dayjs(date).format("MMMM DD, YYYY");
};

export const format_hour = (date: string) => {
  return dayjs(date).format("MMM DD, hh:mm a");
};
