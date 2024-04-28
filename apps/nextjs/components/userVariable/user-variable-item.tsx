"use client"

import Link from "next/link"

import { Skeleton } from "@/components/ui/skeleton"
import { UserVariableOperationsButton } from "@/components/userVariable/user-variable-operations-button"
import { QuickMeasurementButton } from '@/components/userVariable/measurements/quick-measurement-button';
import { MeasurementButton } from '@/components/userVariable/measurement-button';
import { UserVariable } from "@/types/models/UserVariable";
import { Icons } from "../icons";

interface UserVariableItemProps {
  userVariable: UserVariable;
}
export function UserVariableItem({ userVariable }: UserVariableItemProps) {
  return (
    <div className="flex items-center justify-between gap-2 p-4">
      <div className="flex flex-col gap-4">

        <div className="flex items-center gap-4 md:min-w-[8rem]">
          {userVariable.imageUrl && (
            <img src={userVariable.imageUrl} alt={userVariable.name} style={{ maxWidth: '25%', width: '50px' }} />
          )}
          <div>
            <Link
              href={`/dashboard/userVariables/${userVariable.variableId}`}
              className="font-semibold hover:underline"
            >
              {userVariable.name}
            </Link>
{/*            <div>
              <p className="text-sm text-muted-foreground">
                {formatDate(userVariable.createdAt?.toDateString())}
              </p>
            </div>*/}
          </div>
        </div>
{/*        {userVariable.description ? (
          <div className="text-sm text-muted-foreground">
            {userVariable.description}
          </div>
        ) : null}*/}
      </div>
      <div id="variable-buttons" className="flex flex-row gap-2">
        <MeasurementButton
          userVariable={userVariable}
          className="flex h-8 w-8 items-center justify-center rounded-md border transition-colors hover:bg-muted"
          variant="outline"
          size="icon"
        />
        <QuickMeasurementButton
          userVariable={userVariable}
          className="flex h-8 w-8 items-center justify-center rounded-md border transition-colors hover:bg-muted"
          variant="outline"
          size="icon"
        />
        <Link
          href={`/dashboard/userVariables/${userVariable.variableId}`}
          className="flex h-8 w-8 items-center justify-center rounded-md border transition-colors hover:bg-muted"
        >
          <Icons.history className="h-4 w-4" />
        </Link>
        <Link
          href={`/dashboard/userVariables/${userVariable.variableId}/charts`}
          className="flex h-8 w-8 items-center justify-center rounded-md border transition-colors hover:bg-muted"
        >
          <Icons.charts className="h-4 w-4" />
        </Link>
        <UserVariableOperationsButton
          userVariable={userVariable}
        />
      </div>
    </div>
  )
}

UserVariableItem.Skeleton = function UserVariableItemSkeleton() {
  return (
    <div className="p-4">
      <div className="space-y-3">
        <Skeleton className="h-5 w-2/5" />
        <Skeleton className="h-4 w-4/5" />
      </div>
    </div>
  )
}
