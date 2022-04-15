import { useEffect } from 'react';

type useTestProps = {
  isFixed: boolean;
  isFlexible: boolean;
  isFirstStop: boolean;
  isSemiFlexible: boolean;
  updateScheduleStatus: (formData: boolean) => void;
};

export const useScheduleFormStatus = ({
  isFirstStop,
  isFixed,
  isFlexible,
  isSemiFlexible,
  updateScheduleStatus,
}: useTestProps) => {
  useEffect(() => {
    if (isFirstStop && (isFixed || isSemiFlexible)) {
      // For both flexible and semi-flexible, only the first stop can be updated
      // 1. So we need to check if the stop is the first stop
      // 2. and if the scheduling strategy is flexible or semi-flexible

      updateScheduleStatus(true);
    } else if (isFlexible) {
      // For flexible, all stops can be updated

      updateScheduleStatus(true);
    } else {
      // Else the user can't update the form, so we set it to false,
      // if we don't, useEffect will run again without
      // props change and canUpdateSchedule will be true,
      // that's why we don't set it to false by default.

      updateScheduleStatus(false);
    }
  }, [isFlexible, isSemiFlexible, isFirstStop, isFixed, updateScheduleStatus]);
};
