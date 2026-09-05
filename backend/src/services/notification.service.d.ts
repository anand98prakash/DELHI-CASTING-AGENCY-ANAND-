import { NotificationType } from "@prisma/client";
export interface CreateNotificationParams {
    userId: string;
    type: NotificationType;
    title: string;
    message: string;
    entityType?: string;
    entityId?: string;
}
/**
 * Reusable service function to create a database notification for a user.
 * Wrapped in safe error handling so that notification failures never crash
 * primary business workflows (e.g. application submission, status update).
 */
export declare function createNotification(params: CreateNotificationParams): Promise<{
    id: string;
    userId: string;
    type: import("@prisma/client").$Enums.NotificationType;
    title: string;
    message: string;
    entityType: string | null;
    entityId: string | null;
    isRead: boolean;
    readAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
} | null>;
//# sourceMappingURL=notification.service.d.ts.map