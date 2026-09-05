import { NotificationType } from "@prisma/client";
import { prisma } from "../config/prisma.js";

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
export async function createNotification(
  params: CreateNotificationParams,
) {
  try {
    if (!params.userId || !params.type || !params.title || !params.message) {
      console.warn("Invalid parameters provided for createNotification");
      return null;
    }

    const notification = await prisma.notification.create({
      data: {
        userId: params.userId,
        type: params.type,
        title: params.title.trim(),
        message: params.message.trim(),
        entityType: params.entityType ? params.entityType.trim() : null,
        entityId: params.entityId ? params.entityId.trim() : null,
      },
    });

    return notification;
  } catch (error) {
    console.error("Failed to create notification safely:", error);
    return null;
  }
}
