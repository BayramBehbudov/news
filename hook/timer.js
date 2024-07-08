const useDateUtils = () => {
    const dateToMilliseconds = (dateString) => {
        const date = new Date(dateString);
        return date.getTime();
    };

    const timeDifference = (targetMillis) => {
        const now = Date.now();
        const diff = now - targetMillis;

        const seconds = Math.floor(diff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        if (days > 0) {
            return `${days} day`;
        } else if (hours > 0) {
            return `${hours} hour`;
        } else if (minutes > 0) {
            return `${minutes} minute`;
        } else {
            return `${seconds} second`;
        }
    };

    return {
        dateToMilliseconds,
        timeDifference,
    };
};

export default useDateUtils;
